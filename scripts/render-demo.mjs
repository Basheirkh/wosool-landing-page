#!/usr/bin/env node
/**
 * Wosool Demo MP4 Renderer
 *
 * Launches headless Chrome at `/demo?render=true`, captures 60fps frames
 * deterministically via Chrome DevTools `HeadlessExperimental.beginFrame`,
 * then stitches to MP4 via FFmpeg.
 *
 * Usage:
 *   1. Terminal A: `npm run build && npm run start` (Next.js at :3000)
 *   2. Terminal B: `npm run render:demo`
 *
 * Output: renders/wosool-demo-1920x1080.mp4
 */

import puppeteer from "puppeteer";
import { capture } from "puppeteer-capture";
import ffmpegStatic from "ffmpeg-static";
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Use the bundled ffmpeg binary so the pipeline runs without a system install.
// Falls back to PATH lookup if ffmpeg-static ever fails to install on a given platform.
const FFMPEG_BIN = ffmpegStatic ?? "ffmpeg";

// ── CONFIG ──────────────────────────────────────────────────────────────
const CONFIG = {
  url: process.env.DEMO_URL ?? "http://localhost:3000/demo?render=true",
  viewport: { width: 1920, height: 1080 },
  fps: 60,
  outputSilent: "wosool-demo-1920x1080-silent.mp4",
  outputFinal: "wosool-demo-1920x1080.mp4",
  waitForPlayingMs: 30_000,
  /**
   * Deterministic mode runs ~3× slower than wall clock. For a 130s demo,
   * budget ~8 min of real time with headroom. If your machine is slower,
   * raise this — the render still produces frame-accurate output, it just
   * takes longer real time.
   */
  captureTimeoutMs: 20 * 60_000,
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "..", "renders");

// ── MAIN ────────────────────────────────────────────────────────────────
async function main() {
  if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true });

  const silentPath = join(OUTPUT_DIR, CONFIG.outputSilent);
  const finalPath = join(OUTPUT_DIR, CONFIG.outputFinal);

  header();

  // ── Launch Chrome ─────────────────────────────────────────────────────
  const browser = await puppeteer.launch({
    // chrome-headless-shell is the Chrome build that still supports
    // HeadlessExperimental.beginFrame (the old headless). The modern
    // "new" headless mode dropped it.
    headless: "shell",
    // Deterministic mode runs slower than real time; bump the CDP timeout
    // so long-running waitForFunction calls don't get killed.
    protocolTimeout: 30 * 60_000,
    // IMPORTANT: no `defaultViewport` — puppeteer-capture's deterministic
    // mode freezes if the viewport is set before capture starts. We set it
    // manually after recorder.start() below.
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu-sandbox",
      "--enable-features=NetworkService,NetworkServiceInProcess",
      "--font-render-hinting=none",
      "--disable-font-subpixel-positioning",
      `--window-size=${CONFIG.viewport.width},${CONFIG.viewport.height}`,
      "--autoplay-policy=no-user-gesture-required",
      // HeadlessExperimental.beginFrame requirements — Chrome advances time
      // ONLY when puppeteer-capture asks for a frame.
      "--deterministic-mode",
      "--enable-begin-frame-control",
      "--disable-new-content-rendering-timeout",
      "--run-all-compositor-stages-before-draw",
      "--disable-threaded-animation",
      "--disable-threaded-scrolling",
      "--disable-checker-imaging",
      "--disable-image-animation-resync",
      "--enable-surface-synchronization",
    ],
    defaultViewport: null,
  });

  const page = await browser.newPage();
  let pageCuesMs = null;

  // Surface browser errors in our terminal
  page.on("console", (msg) => {
    const type = msg.type();
    if (type === "error" || type === "warning") {
      console.log(`[browser ${type}] ${msg.text()}`);
    }
  });
  page.on("pageerror", (err) => console.error("[browser pageerror]", err.message));

  // ── Load the demo — time is frozen here; nothing animates yet ─────────
  console.log("📄 Loading", CONFIG.url);
  await page.goto(CONFIG.url, { waitUntil: "networkidle2", timeout: 60_000 });
  await page.waitForFunction(
    () => typeof window.__DEMO_AUDIO_CUES__ === "object" && window.__DEMO_AUDIO_CUES__ !== null,
    { timeout: 10_000, polling: 100 },
  );
  pageCuesMs = await page.evaluate(() => window.__DEMO_AUDIO_CUES__);

  // ── Attach recorder ───────────────────────────────────────────────────
  const recorder = await capture(page, {
    ffmpeg: FFMPEG_BIN,
    fps: CONFIG.fps,
    size: `${CONFIG.viewport.width}x${CONFIG.viewport.height}`,
  });

  // ── Start capture — this is what makes Chrome's clock advance ─────────
  console.log(`🎥 Starting capture @ ${CONFIG.fps}fps → ${silentPath}`);
  await recorder.start(silentPath);

  // Set viewport AFTER start (works around puppeteer-capture's known
  // freeze race with pre-capture setViewport)
  await page.setViewport({
    width: CONFIG.viewport.width,
    height: CONFIG.viewport.height,
    deviceScaleFactor: 1,
  });

  // ── Wait for the demo to reach "complete" (time advances as frames fire)
  console.log("⏳ Capturing… waiting for window.__DEMO_STATE__ === 'complete'");
  await page.waitForFunction(
    () => window.__DEMO_STATE__ === "complete",
    { timeout: CONFIG.captureTimeoutMs, polling: 250 },
  );
  console.log("   ✓ Demo reached 'complete'");

  await recorder.stop();
  await recorder.detach();
  console.log("   ✓ Recorder stopped");

  await browser.close();

  // ── Mux audio + finalize ──────────────────────────────────────────────
  // puppeteer-capture records VIDEO ONLY (via HeadlessExperimental.beginFrame).
  // We mix background music (looped) + 9 voice clips at their scene cue
  // times here, sum them into one track, and mux onto the silent video.
  console.log("");
  console.log("🎞  Muxing audio (bg music + 9 voice clips) + finalizing");

  const VOICE_DIR = join(__dirname, "..", "public", "audio", "voice");
  const MUSIC_DIR = join(__dirname, "..", "public", "audio", "music");

  // Scene-start timings in ms (cumulative from t=0). Primary source is the
  // live page timeline exported on window.__DEMO_AUDIO_CUES__. The fallback
  // keeps the script runnable if the page export is missing.
  const FALLBACK_CUES_MS = {
    "01-hook.mp3":             0,
    "02-setup.mp3":         14000,
    "03-connect.mp3":       32300,
    "m1-merchant-voice.mp3":47400,
    "04-admin-agent.mp3":   55400,
    "05-customer-agent.mp3":78900,
    "06-policy.mp3":        87400,
    "07-sales-agent.mp3":   97400,
    "08-closer.mp3":       111900,
  };
  const CUES_MS = pageCuesMs ?? FALLBACK_CUES_MS;
  const BG_MUSIC = "background.mp3";
  /** Background music stays very quiet — voice should dominate */
  const BG_VOLUME = 0.07;
  /** Voice clips at full level */
  const VOICE_VOLUME = 1.0;

  const voiceEntries = Object.entries(CUES_MS);
  console.log("🎚️  Using audio cues (ms):", CUES_MS);
  const ffmpegArgs = ["-y", "-i", silentPath, "-stream_loop", "-1", "-i", join(MUSIC_DIR, BG_MUSIC)];
  for (const [file] of voiceEntries) {
    ffmpegArgs.push("-i", join(VOICE_DIR, file));
  }

  // Build filter_complex
  //   bg:    music × BG_VOLUME
  //   vN:    voice × VOICE_VOLUME, delayed to scene cue
  //   out:   amix(normalize=0) — voices + bg summed without auto-ducking
  const filterParts = [`[1:a]volume=${BG_VOLUME}[bg]`];
  const mixLabels = ["[bg]"];
  voiceEntries.forEach(([, delayMs], i) => {
    const input = i + 2; // video=0, music=1, then voices
    const label = `v${i}`;
    filterParts.push(
      `[${input}:a]volume=${VOICE_VOLUME},adelay=${delayMs}|${delayMs}[${label}]`,
    );
    mixLabels.push(`[${label}]`);
  });
  filterParts.push(
    `${mixLabels.join("")}amix=inputs=${mixLabels.length}:duration=first:normalize=0,loudnorm=I=-14:TP=-1:LRA=11[aout]`,
  );

  ffmpegArgs.push(
    "-filter_complex", filterParts.join(";"),
    "-map", "0:v:0",
    "-map", "[aout]",
    "-c:v", "libx264",
    "-preset", "slow",
    "-crf", "18",
    "-pix_fmt", "yuv420p",
    "-c:a", "aac",
    "-ar", "44100",
    "-b:a", "192k",
    "-movflags", "+faststart",
    "-shortest",
    finalPath,
  );

  await runFFmpeg(ffmpegArgs);

  const sizeMB = (statSync(finalPath).size / 1024 / 1024).toFixed(1);

  console.log("");
  console.log("✅ Done!");
  console.log(`   ${finalPath}  (${sizeMB} MB)`);
  console.log("");
  console.log("Next steps:");
  console.log("  • Verify locally: open the MP4 in VLC or QuickTime");
  console.log("  • Inspect metadata: ffprobe", finalPath);
  console.log("  • Upload to the Salla app-store listing when you're happy");
  console.log("");
}

// ── FFMPEG HELPER ───────────────────────────────────────────────────────
function runFFmpeg(args) {
  return new Promise((resolve, reject) => {
    const proc = spawn(FFMPEG_BIN, args, { stdio: "inherit" });
    proc.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`FFmpeg exited with code ${code}`));
    });
    proc.on("error", reject);
  });
}

function header() {
  console.log("🎬 Wosool Demo Renderer");
  console.log(`   URL:    ${CONFIG.url}`);
  console.log(`   Size:   ${CONFIG.viewport.width}×${CONFIG.viewport.height}`);
  console.log(`   FPS:    ${CONFIG.fps}`);
  console.log(`   Output: ${join(OUTPUT_DIR, CONFIG.outputFinal)}`);
  console.log("");
}

// ── ENTRY ───────────────────────────────────────────────────────────────
main().catch((err) => {
  console.error("❌ Render failed:", err);
  process.exit(1);
});

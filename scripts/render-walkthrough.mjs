#!/usr/bin/env node
/**
 * Wosool Walkthrough MP4 Renderer
 *
 * Renders motion/Wosool Walkthrough.html → MP4 deterministically.
 *
 * Pipeline:
 *   1. Launches headless Chrome at the page with ?render=true
 *      → Stage starts paused, playback bar hidden, in-page audio muted.
 *   2. Calls window.__startRender() to begin playback at t=0.
 *   3. Captures 60fps frames via HeadlessExperimental.beginFrame
 *      (deterministic — Chrome's clock only advances when puppeteer-capture
 *      requests a frame).
 *   4. Stops when window.__DEMO_STATE__ === 'complete'.
 *   5. Muxes background-new.mp3 (looped, 30% volume) onto the silent video.
 *
 * Usage:
 *   Terminal A:  cd "motion " && python3 -m http.server 8765
 *   Terminal B:  npm run render:walkthrough
 *
 * Output: renders/wosool-walkthrough-1920x1080.mp4
 */

import puppeteer from "puppeteer";
import { capture } from "puppeteer-capture";
import ffmpegStatic from "ffmpeg-static";
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const FFMPEG_BIN = ffmpegStatic ?? "ffmpeg";

// ── CONFIG ──────────────────────────────────────────────────────────────
const CONFIG = {
  url: process.env.WALKTHROUGH_URL
    ?? "http://localhost:8765/Wosool%20Walkthrough.html?render=true",
  viewport: { width: 1920, height: 1080 },
  fps: 60,
  outputSilent: "wosool-walkthrough-1920x1080-silent.mp4",
  outputFinal:  "wosool-walkthrough-1920x1080.mp4",
  bgMusic: "background-new.mp3",
  // 0.55 gain + loudnorm = audible in standalone players. The browser
  // preview at 0.3 sounds quieter than the same gain inside a muxed mp4,
  // so we boost on render and let loudnorm even it out.
  bgVolume: 0.55,
  // Click SFX (pre-generated) muxed at every cursor-click cue in the
  // walkthrough. Times are absolute seconds in the rendered timeline.
  clickSfx: "../sfx/click.wav",
  clickTimes: [6.5, 10.5, 31.0, 106.05],
  // The walkthrough is ~150s. Deterministic capture runs ~3× slower than
  // real time → ~8 min of actual rendering. Pad to 20 min for headroom.
  captureTimeoutMs: 25 * 60_000,
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "..", "renders");

// ── MAIN ────────────────────────────────────────────────────────────────
async function main() {
  if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true });

  const silentPath = join(OUTPUT_DIR, CONFIG.outputSilent);
  const finalPath  = join(OUTPUT_DIR, CONFIG.outputFinal);

  header();

  const browser = await puppeteer.launch({
    // chrome-headless-shell still supports HeadlessExperimental.beginFrame.
    headless: "shell",
    protocolTimeout: 30 * 60_000,
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
      // HeadlessExperimental.beginFrame requirements.
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
  page.on("console", (msg) => {
    const type = msg.type();
    if (type === "error" || type === "warning") {
      console.log(`[browser ${type}] ${msg.text()}`);
    }
  });
  page.on("pageerror", (err) => console.error("[browser pageerror]", err.message));

  // ── Load the walkthrough (paused — Stage is idle until startRender) ───
  console.log("📄 Loading", CONFIG.url);
  await page.goto(CONFIG.url, { waitUntil: "networkidle2", timeout: 60_000 });
  await page.waitForFunction(
    () => typeof window.__startRender === "function" && window.__DEMO_DURATION__,
    { timeout: 15_000, polling: 100 },
  );
  const duration = await page.evaluate(() => window.__DEMO_DURATION__);
  console.log(`   ✓ Page ready · duration = ${duration}s`);

  // ── Attach recorder + start capture ───────────────────────────────────
  const recorder = await capture(page, {
    ffmpeg: FFMPEG_BIN,
    fps: CONFIG.fps,
    size: `${CONFIG.viewport.width}x${CONFIG.viewport.height}`,
  });

  console.log(`🎥 Starting capture @ ${CONFIG.fps}fps → ${silentPath}`);
  await recorder.start(silentPath);

  // Set viewport AFTER recorder.start (works around puppeteer-capture's
  // pre-capture setViewport freeze race).
  await page.setViewport({
    width: CONFIG.viewport.width,
    height: CONFIG.viewport.height,
    deviceScaleFactor: 1,
  });

  // Trigger the Stage to begin playing from t=0.
  console.log("▶  Triggering window.__startRender()");
  await page.evaluate(() => window.__startRender());

  console.log("⏳ Capturing… waiting for window.__DEMO_STATE__ === 'complete'");
  await page.waitForFunction(
    () => window.__DEMO_STATE__ === "complete",
    { timeout: CONFIG.captureTimeoutMs, polling: 250 },
  );
  console.log("   ✓ Walkthrough complete");

  await recorder.stop();
  await recorder.detach();
  console.log("   ✓ Recorder stopped");

  await browser.close();

  // ── Mux background music (looped) onto the silent video ───────────────
  console.log("");
  console.log("🎞  Muxing background music + finalizing");

  const MUSIC_DIR = join(__dirname, "..", "public", "audio", "music");

  // Build filter_complex:
  //   [music] = bg music at bgVolume, fade-out near end, loudnorm
  //   [clicks] = N copies of click.wav, each delayed to its cue time, summed
  //   [aout] = [music] + [clicks]
  const clickPath = join(MUSIC_DIR, CONFIG.clickSfx);
  const N = CONFIG.clickTimes.length;
  const fadeStart = Math.max(0, duration - 1.5);
  const parts = [
    `[1:a]volume=${CONFIG.bgVolume},afade=t=out:st=${fadeStart}:d=1.5,loudnorm=I=-16:TP=-1.5:LRA=11[music]`,
    `[2:a]asplit=${N}${CONFIG.clickTimes.map((_, i) => `[c${i}]`).join('')}`,
    ...CONFIG.clickTimes.map((t, i) => {
      const ms = Math.round(t * 1000);
      return `[c${i}]adelay=${ms}|${ms}[d${i}]`;
    }),
    `${CONFIG.clickTimes.map((_, i) => `[d${i}]`).join('')}amix=inputs=${N}:duration=longest:normalize=0[clicks]`,
    `[music][clicks]amix=inputs=2:duration=first:normalize=0[aout]`,
  ];

  const ffmpegArgs = [
    "-y",
    "-i", silentPath,
    "-stream_loop", "-1",
    "-i", join(MUSIC_DIR, CONFIG.bgMusic),
    "-i", clickPath,
    "-filter_complex", parts.join(";"),
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
  ];

  await runFFmpeg(ffmpegArgs);

  const sizeMB = (statSync(finalPath).size / 1024 / 1024).toFixed(1);

  console.log("");
  console.log("✅ Done!");
  console.log(`   ${finalPath}  (${sizeMB} MB)`);
  console.log("");
  console.log("Next steps:");
  console.log("  • Verify locally: open the MP4 in VLC or QuickTime");
  console.log("  • Inspect metadata: ffprobe", finalPath);
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
  console.log("🎬 Wosool Walkthrough Renderer");
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

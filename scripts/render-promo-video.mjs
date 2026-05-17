#!/usr/bin/env node
/**
 * Render PROMO-handoff slides as a deterministic MP4 video.
 *
 * Loads the design HTML directly, then uses a frame-counter-driven rAF
 * loop to crossfade between slides. No server needed.
 *
 * Output: renders/wosool-promo-slides-1920x1080.mp4  (silent)
 */

import puppeteer from "puppeteer";
import { capture } from "puppeteer-capture";
import ffmpegStatic from "ffmpeg-static";
import { existsSync, mkdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const FFMPEG_BIN = ffmpegStatic ?? "ffmpeg";

const CONFIG = {
  viewport: { width: 1920, height: 1080 },
  fps: 30,
  output: "wosool-promo-slides-1920x1080.mp4",
  slideDuration: 4,
  crossfadeDuration: 0.8,
  captureTimeoutMs: 10 * 60_000,
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const HTML_PATH = join(
  __dirname, "..", "PROMO-handoff", "promo", "project", "Wosool Banners.html",
);
const OUTPUT_DIR = join(__dirname, "..", "renders");

async function main() {
  if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true });

  const outputPath = join(OUTPUT_DIR, CONFIG.output);

  header();

  // ── Launch Chrome (deterministic mode) ──────────────────────────────
  const browser = await puppeteer.launch({
    headless: "shell",
    protocolTimeout: 30 * 60_000,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu-sandbox",
      "--font-render-hinting=none",
      "--disable-font-subpixel-positioning",
      `--window-size=${CONFIG.viewport.width},${CONFIG.viewport.height}`,
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
  page.on("pageerror", (err) => console.error("[browser pageerror]", err.message));

  // ── Load the design HTML ───────────────────────────────────────────
  const url = pathToFileURL(HTML_PATH).href;
  console.log("📄 Loading", url);
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60_000 });

  await page.waitForFunction(
    () => {
      const d = document.querySelector("deck-stage");
      return d && typeof d.goTo === "function";
    },
    { timeout: 15_000 },
  );

  // Configure deck-stage and inject crossfade support
  await page.evaluate((cfg) => {
    const deck = document.querySelector("deck-stage");
    deck.setAttribute("noscale", "");
    deck.setAttribute("no-rail", "");
    deck.removeAttribute("data-fonts-pending");

    // Override slider visibility in shadow DOM so ALL slides stay visible
    // (we control opacity ourselves via inline style)
    const shadowSheet = document.createElement("style");
    shadowSheet.textContent = `
      ::slotted(*) {
        visibility: visible !important;
        pointer-events: none !important;
        transition: opacity ${cfg.crossfade}s ease !important;
      }
    `;
    deck.shadowRoot.appendChild(shadowSheet);

    // ── Animation state ──────────────────────────────────────────────
    const slides = Array.from(document.querySelectorAll(".slide"));
    const totalSlides = slides.length;
    const totalFrames = Math.round(totalSlides * cfg.slideDuration * cfg.fps);
    let frame = 0;
    const crossfadePortion = cfg.crossfadeDuration / cfg.slideDuration;

    window.__startRender = function () {
      frame = 0;
      window.__DEMO_STATE__ = "rendering";

      function tick() {
        if (frame >= totalFrames) {
          window.__DEMO_STATE__ = "complete";
          return;
        }

        const t = frame / cfg.fps;
        const rawIdx = t / cfg.slideDuration;
        const currentIdx = Math.min(Math.floor(rawIdx), totalSlides - 1);
        const localT = rawIdx - currentIdx;

        // zero all opacities
        for (let i = 0; i < totalSlides; i++) slides[i].style.opacity = "0";

        if (currentIdx === 0) {
          slides[0].style.opacity = "1";
        } else if (localT < crossfadePortion) {
          const p = localT / crossfadePortion;
          slides[currentIdx - 1].style.opacity = String(1 - p);
          slides[currentIdx].style.opacity = String(p);
        } else {
          slides[currentIdx].style.opacity = "1";
        }

        frame++;
        requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    };
  }, {
    slideDuration: CONFIG.slideDuration,
    crossfadeDuration: CONFIG.crossfadeDuration,
    fps: CONFIG.fps,
  });

  const totalSlides = await page.evaluate(() => document.querySelectorAll(".slide").length);
  const totalFrames = Math.round(totalSlides * CONFIG.slideDuration * CONFIG.fps);
  console.log(`   ${totalSlides} slides · ${totalFrames} frames @ ${CONFIG.fps}fps`);

  // ── Attach recorder ────────────────────────────────────────────────
  const recorder = await capture(page, {
    ffmpeg: FFMPEG_BIN,
    fps: CONFIG.fps,
    size: `${CONFIG.viewport.width}x${CONFIG.viewport.height}`,
  });

  console.log(`🎥 Starting capture @ ${CONFIG.fps}fps → ${outputPath}`);
  await recorder.start(outputPath);

  await page.setViewport({
    width: CONFIG.viewport.width,
    height: CONFIG.viewport.height,
    deviceScaleFactor: 1,
  });

  // ── Start the animation loop ──────────────────────────────────────
  console.log("▶  Starting animation");
  await page.evaluate(() => window.__startRender());

  console.log("⏳ Capturing…");
  await page.waitForFunction(
    () => window.__DEMO_STATE__ === "complete",
    { timeout: CONFIG.captureTimeoutMs, polling: 250 },
  );
  console.log("   ✓ Complete");

  await recorder.stop();
  await recorder.detach();
  await browser.close();

  const sizeMB = (statSync(outputPath).size / 1024 / 1024).toFixed(1);
  console.log("");
  console.log(`✅ ${outputPath}  (${sizeMB} MB)`);
}

function header() {
  console.log("🎬 PROMO Slides → MP4");
  console.log(`   Size:   ${CONFIG.viewport.width}×${CONFIG.viewport.height}`);
  console.log(`   FPS:    ${CONFIG.fps}`);
  console.log(`   Slide:  ${CONFIG.slideDuration}s + ${CONFIG.crossfadeDuration}s crossfade`);
  console.log(`   Output: ${join(OUTPUT_DIR, CONFIG.output)}`);
  console.log("");
}

main().catch((err) => {
  console.error("❌ Render failed:", err);
  process.exit(1);
});

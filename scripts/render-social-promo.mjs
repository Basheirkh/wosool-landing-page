#!/usr/bin/env node
/**
 * Wosool Social Promo PNG Renderer (1600×1600)
 *
 * Renders the square asset Salla uploads to Twitter/Instagram/LinkedIn.
 * Exactly 1600×1600, deviceScaleFactor 1 — Salla's field enforces this
 * and oversized uploads fail validation.
 *
 * Usage (with dev server running):
 *   Terminal A: npm run dev
 *   Terminal B: npm run render:social
 *
 * Output: renders/banners/wosool-social-promo-1600x1600.png
 */

import puppeteer from "puppeteer";
import { existsSync, mkdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const CONFIG = {
  url: process.env.SOCIAL_PROMO_URL ?? "http://localhost:3000/banners/social-promo?render=true",
  viewport: { width: 1600, height: 1600 },
  deviceScaleFactor: 1,
  outName: "wosool-social-promo-1600x1600.png",
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "..", "renders", "banners");

async function main() {
  if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true });
  const outPath = join(OUTPUT_DIR, CONFIG.outName);

  console.log("─ Wosool Social Promo Render ────────────────────────");
  console.log(`  URL      : ${CONFIG.url}`);
  console.log(`  viewport : ${CONFIG.viewport.width}×${CONFIG.viewport.height} @${CONFIG.deviceScaleFactor}x`);
  console.log(`  output   : ${outPath}`);
  console.log("────────────────────────────────────────────────────");

  const browser = await puppeteer.launch({
    headless: "new",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--font-render-hinting=none",
      "--disable-font-subpixel-positioning",
      `--window-size=${CONFIG.viewport.width},${CONFIG.viewport.height}`,
    ],
    defaultViewport: {
      width: CONFIG.viewport.width,
      height: CONFIG.viewport.height,
      deviceScaleFactor: CONFIG.deviceScaleFactor,
    },
  });

  const page = await browser.newPage();
  page.on("pageerror", (err) => console.error("[browser pageerror]", err.message));

  await page.goto(CONFIG.url, { waitUntil: "networkidle2", timeout: 60_000 });
  await page.waitForSelector("[data-social-promo]", { timeout: 15_000 });

  // IBM Plex Sans Arabic must be fully loaded before screenshot, otherwise
  // the PNG bakes in a fallback and Salla will publish a broken image.
  await page.evaluateHandle("document.fonts.ready");
  await new Promise((r) => setTimeout(r, 500));

  const clip = await page.evaluate(() => {
    const el = document.querySelector("[data-social-promo]");
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { x: r.x, y: r.y, width: r.width, height: r.height };
  });
  if (!clip) throw new Error("[data-social-promo] element not found");

  await page.screenshot({
    path: outPath,
    type: "png",
    clip,
    omitBackground: false,
  });

  await browser.close();

  const { size } = statSync(outPath);
  console.log(`\n✓ ${outPath}`);
  console.log(`  size: ${(size / 1024).toFixed(1)} KB`);
}

main().catch((err) => {
  console.error("\n✗ Render failed:", err);
  process.exit(1);
});

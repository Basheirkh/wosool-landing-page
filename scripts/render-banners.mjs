#!/usr/bin/env node
/**
 * Wosool Banners PNG Renderer
 *
 * Launches headless Chrome, navigates to /banners?banner=N&render=true
 * for each of the 6 banners, and writes a 1920×1080 PNG per banner.
 *
 * Usage (with dev server):
 *   Terminal A: npm run dev
 *   Terminal B: npm run render:banners
 *
 * Usage (with production build):
 *   npm run build && (cd .next/standalone && node server.js) &
 *   npm run render:banners
 *
 * Output: renders/banners/banner-<N>-<slug>.png
 */

import puppeteer from "puppeteer";
import { existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const CONFIG = {
  baseUrl: process.env.BANNERS_URL ?? "http://localhost:3000/banners",
  viewport: { width: 1920, height: 1080 },
  // deviceScaleFactor: 1 → exact 1920×1080. Set to 2 for @2x export.
  deviceScaleFactor: Number(process.env.BANNERS_DPR ?? 1),
  banners: [
    { id: 1, slug: "the-promise" },
    { id: 2, slug: "the-team" },
    { id: 3, slug: "customer-agent" },
    { id: 4, slug: "manager-agent" },
    { id: 5, slug: "sales-agent" },
    { id: 6, slug: "trust" },
  ],
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, "..", "renders", "banners");

async function main() {
  if (!existsSync(OUTPUT_DIR)) mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log("─ Wosool Banners PNG Render ────────────────────────");
  console.log(`  base URL : ${CONFIG.baseUrl}`);
  console.log(`  viewport : ${CONFIG.viewport.width}×${CONFIG.viewport.height} @${CONFIG.deviceScaleFactor}x`);
  console.log(`  output   : ${OUTPUT_DIR}`);
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

  for (const { id, slug } of CONFIG.banners) {
    const url = `${CONFIG.baseUrl}?banner=${id}&render=true`;
    const outPath = join(OUTPUT_DIR, `banner-${id}-${slug}.png`);

    console.log(`\n▸ banner ${id} — ${slug}`);
    console.log(`  load ${url}`);
    await page.goto(url, { waitUntil: "networkidle2", timeout: 60_000 });

    // Wait for the banner frame to be in the DOM.
    await page.waitForSelector(`[data-banner-id="${id}"]`, { timeout: 15_000 });

    // Give fonts / images one extra beat to settle.
    await page.evaluate(() => document.fonts?.ready);
    await new Promise((r) => setTimeout(r, 400));

    // Clip the screenshot to the exact banner element so we get 1920×1080
    // with no outer chrome even if the preview page ever regresses.
    const clip = await page.evaluate((bannerId) => {
      const el = document.querySelector(`[data-banner-id="${bannerId}"]`);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: r.x, y: r.y, width: r.width, height: r.height };
    }, id);

    if (!clip) throw new Error(`Banner ${id} frame not found in DOM`);

    await page.screenshot({
      path: outPath,
      type: "png",
      clip,
      omitBackground: false,
    });

    console.log(`  ✓ ${outPath}`);
  }

  await browser.close();

  console.log("\n✓ Done — 6 PNGs written to renders/banners/");
}

main().catch((err) => {
  console.error("\n✗ Render failed:", err);
  process.exit(1);
});

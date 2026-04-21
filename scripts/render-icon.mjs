#!/usr/bin/env node
/**
 * Wosool App Icon Renderer
 *
 * Renders the mint-tile + Wosool mark (as seen in the demo's SallaCard)
 * to a PNG at public/icons/wosool-app-icon.png.
 *
 * Source spec (mirrors src/app/demo/primitives/SallaCard.tsx and WosoolMark.tsx):
 *   - tile 220×220, mint #73FCD7, 16px radius
 *   - mark at size 140, ink #0B1A1F, viewBox 74.424 10.582 46.872 28.387
 *
 * Usage: npm run render:icon
 */

import puppeteer from "puppeteer";
import { mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SIZE = 1024;
const MINT = "#73FCD7";
const INK = "#0B1A1F";
const RADIUS = Math.round(16 * (SIZE / 220)); // ~74
const MARK_WIDTH = Math.round(140 * (SIZE / 220)); // ~651

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "..", "public", "icons");
const OUT_PATH = join(OUT_DIR, "wosool-app-icon.png");

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
  html, body { margin: 0; padding: 0; background: transparent; }
  body { width: ${SIZE}px; height: ${SIZE}px; display: flex; align-items: center; justify-content: center; }
  .tile {
    width: ${SIZE}px;
    height: ${SIZE}px;
    background: ${MINT};
    border-radius: ${RADIUS}px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  svg { display: block; }
</style>
</head>
<body>
  <div class="tile">
    <svg width="${MARK_WIDTH}" viewBox="74.424 10.582 46.872 28.387" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wosool">
      <path fill="${INK}" d="M103.6,32.7c-.6-.6-1.3-1.6-1.5-2.3s-.5-1.2.6-.7c2.5,1.3,3.9,2.2,6.9,1.9,5.9-.5,8.3-8,3.7-11.7-3.4-2.6-7.2-1.2-10,1.4-5,4.4-6.5,11.4-13.6,13.5-9.2,2.8-17.1-7.5-11.6-15.5,3.5-5.1,12.4-5.4,14.3-2.1s1.2,2.2,1.4,2.8v.2c-.2,0-2.1-1.1-2.5-1.3-3.8-1.6-8.5-.9-10.2,3.1s2.8,10.7,8.3,8.7c5.9-2.1,7.5-8.3,11.7-12.3s8-5.1,12.7-3.1c7.5,3.3,8.3,13.4,1.5,18-3.3,2.1-8.9,2.3-11.7-.6h0Z"/>
    </svg>
  </div>
</body>
</html>`;

async function main() {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: SIZE, height: SIZE, deviceScaleFactor: 1 });
  await page.setContent(html, { waitUntil: "domcontentloaded" });
  await page.screenshot({
    path: OUT_PATH,
    type: "png",
    omitBackground: true,
    clip: { x: 0, y: 0, width: SIZE, height: SIZE },
  });
  await browser.close();

  console.log(`✅ Wrote ${OUT_PATH} (${SIZE}×${SIZE})`);
}

main().catch((err) => {
  console.error("❌ Render failed:", err);
  process.exit(1);
});

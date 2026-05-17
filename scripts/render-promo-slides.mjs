#!/usr/bin/env node
/**
 * Render every slide inside Wosool Banners.html as a high-res PNG.
 * Uses deck-stage's `noscale` mode + `goTo(i)` API so each slide is the
 * active, fully-rendered one when captured.
 *
 * Output: PROMO-handoff/promo/project/renders/slide-<N>.png (1920×1080 @ DPR)
 */

import puppeteer from "puppeteer";
import { existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const HTML = join(__dirname, "..", "PROMO-handoff", "promo", "project", "Wosool Banners.html");
const OUT = join(__dirname, "..", "PROMO-handoff", "promo", "project", "renders");
const DPR = Number(process.env.DPR ?? 2);

async function main() {
  if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

  const browser = await puppeteer.launch({
    headless: "new",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--font-render-hinting=none",
    ],
    defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: DPR },
  });

  const page = await browser.newPage();
  page.on("pageerror", (err) => console.error("[pageerror]", err.message));

  const url = pathToFileURL(HTML).href;
  console.log("load", url);
  await page.goto(url, { waitUntil: "networkidle2", timeout: 60_000 });

  // Force authored-size rendering (no auto-fit scaling, no thumbnail rail).
  await page.evaluate(() => {
    const deck = document.querySelector("deck-stage");
    deck.setAttribute("noscale", "");
    deck.setAttribute("no-rail", "");
  });

  // Wait for QR + fonts
  await new Promise((r) => setTimeout(r, 1200));

  const count = await page.$$eval(".slide", (els) => els.length);
  console.log(`found ${count} slides — rendering @${DPR}x`);

  for (let i = 0; i < count; i++) {
    // Make slide i the active one
    await page.evaluate((idx) => {
      const deck = document.querySelector("deck-stage");
      deck.goTo(idx);
    }, i);
    await new Promise((r) => setTimeout(r, 400));

    // Screenshot the active slide element directly
    const buf = await page.evaluate(async (idx) => {
      const slide = document.querySelectorAll(".slide")[idx];
      const r = slide.getBoundingClientRect();
      return { x: r.x, y: r.y, width: r.width, height: r.height };
    }, i);

    const file = join(OUT, `slide-${String(i + 1).padStart(2, "0")}.png`);
    await page.screenshot({
      path: file,
      type: "png",
      clip: { x: buf.x, y: buf.y, width: buf.width, height: buf.height },
    });
    console.log(`  ✓ ${file}  (${Math.round(buf.width)}×${Math.round(buf.height)})`);
  }

  await browser.close();
  console.log("\ndone →", OUT);
}

main().catch((e) => { console.error(e); process.exit(1); });

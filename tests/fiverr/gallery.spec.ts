import { expect, test } from "@playwright/test";
import path from "node:path";
import {
  assetsDir,
  baseURL,
  ensureDirs,
  readPngSize,
  settlePage,
} from "./helpers";

/**
 * Composes the finished captures into Fiverr gallery images. Fiverr's main
 * gallery slot expects 1280 x 769 (horizontal 5:3), so every canvas is
 * captured at device scale 1 to land on those exact pixel dimensions.
 */

const CANVAS = { width: 1280, height: 769 };

const canvases = [
  { id: "canvas-gallery", file: "business-website-gallery.png" },
  { id: "canvas-desktop", file: "gallery-desktop-presentation.png" },
  { id: "canvas-mobile", file: "gallery-mobile-responsive.png" },
];

test.use({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1,
});

test("export fiverr gallery images", async ({ page }) => {
  ensureDirs();

  await page.goto(`${baseURL}/fiverr-showcase`, { waitUntil: "networkidle" });
  await settlePage(page, 900);

  // Canvases can land on fractional offsets, which would round an element
  // screenshot up to 770 px. Clipping the full page at integer coordinates
  // keeps the export at exactly 1280 x 769.
  await page.evaluate(() =>
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior }),
  );

  for (const canvas of canvases) {
    const locator = page.locator(`#${canvas.id}`);
    await expect(locator).toBeVisible();

    const box = await locator.boundingBox();
    expect(box?.width).toBe(CANVAS.width);
    expect(box?.height).toBe(CANVAS.height);

    const filePath = path.join(assetsDir, canvas.file);
    await page.screenshot({
      path: filePath,
      fullPage: true,
      animations: "disabled",
      clip: {
        x: Math.round(box?.x ?? 0),
        y: Math.round(box?.y ?? 0),
        width: CANVAS.width,
        height: CANVAS.height,
      },
    });
    expect(readPngSize(filePath)).toEqual(CANVAS);
  }
});

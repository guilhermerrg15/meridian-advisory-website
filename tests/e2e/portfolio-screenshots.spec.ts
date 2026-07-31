import { expect, test } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

const outputDir = path.join(
  process.cwd(),
  "portfolio-assets",
  "business-website",
);

// Slides are authored at 1280x960 (4:3) so marketplace thumbnails that crop to
// 4:3 (Fiverr recommends 1024x768) never cut off slide content.
const SLIDE_WIDTH = 1280;
const SLIDE_HEIGHT = 960;
const SCALE = 2;

const slides = [
  {
    id: "slide-1",
    file: "01-business-website-cover.png",
  },
  {
    id: "slide-2",
    file: "02-desktop-pages.png",
  },
  {
    id: "slide-3",
    file: "03-mobile-responsive.png",
  },
  {
    id: "slide-4",
    file: "04-features-and-technology.png",
  },
  {
    id: "slide-5",
    file: "05-design-system.png",
  },
];

function readPngSize(filePath: string) {
  const buffer = fs.readFileSync(filePath);
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

test.use({
  viewport: { width: 1440, height: 1100 },
  deviceScaleFactor: SCALE,
});

test("capture portfolio showcase slides", async ({ page }) => {
  fs.mkdirSync(outputDir, { recursive: true });
  await page.goto("/portfolio-showcase", { waitUntil: "networkidle" });

  for (const slide of slides) {
    const locator = page.locator(`#${slide.id}`);
    await expect(locator).toBeVisible();

    const box = await locator.boundingBox();
    expect(box?.width).toBe(SLIDE_WIDTH);
    expect(box?.height).toBe(SLIDE_HEIGHT);

    const filePath = path.join(outputDir, slide.file);
    await locator.screenshot({ path: filePath, animations: "disabled" });

    const size = readPngSize(filePath);
    expect(size.width).toBe(SLIDE_WIDTH * SCALE);
    expect(size.height).toBe(SLIDE_HEIGHT * SCALE);
    expect(size.width / size.height).toBeCloseTo(4 / 3, 5);
  }
});

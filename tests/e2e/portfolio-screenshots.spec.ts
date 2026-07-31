import { expect, test } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

const outputDir = path.join(
  process.cwd(),
  "portfolio-assets",
  "business-website",
);

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

test("capture portfolio showcase slides", async ({ page }) => {
  fs.mkdirSync(outputDir, { recursive: true });
  await page.setViewportSize({ width: 1400, height: 900 });
  await page.goto("/portfolio-showcase", { waitUntil: "networkidle" });

  for (const slide of slides) {
    const locator = page.locator(`#${slide.id}`);
    await expect(locator).toBeVisible();
    const box = await locator.boundingBox();
    expect(box?.width).toBe(1280);
    expect(box?.height).toBe(769);
    await locator.screenshot({
      path: path.join(outputDir, slide.file),
      animations: "disabled",
    });
  }
});

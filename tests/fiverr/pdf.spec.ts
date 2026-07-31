import { expect, test } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import { assetsDir, baseURL, ensureDirs, settlePage } from "./helpers";

/**
 * Exports the three-page case study. The page box matches the 1280 x 769
 * canvas so each presentation page maps to exactly one PDF page.
 */

function countPdfPages(filePath: string) {
  const content = fs.readFileSync(filePath).toString("latin1");
  const matches = content.match(/\/Type\s*\/Page[^s]/g);
  return matches ? matches.length : 0;
}

test.use({ viewport: { width: 1440, height: 1000 } });

test("export the three-page case study PDF", async ({ page }) => {
  ensureDirs();

  await page.goto(`${baseURL}/fiverr-showcase/pdf`, {
    waitUntil: "networkidle",
  });
  await expect(
    page.getByRole("heading", { name: /business website case study/i }),
  ).toBeVisible();
  await settlePage(page, 900);

  // Each page is a fixed 769 px box with hidden overflow, so content that grows
  // past it would be silently cropped in the export.
  for (const id of ["pdf-page-1", "pdf-page-2", "pdf-page-3"]) {
    const overflow = await page
      .locator(`#${id}`)
      .evaluate((element) => element.scrollHeight - element.clientHeight);
    expect(overflow, `${id} overflows its 769 px page box`).toBeLessThanOrEqual(
      0,
    );
  }

  const pdfPath = path.join(assetsDir, "business-website-case-study.pdf");
  await page.pdf({
    path: pdfPath,
    width: "1280px",
    height: "769px",
    printBackground: true,
    pageRanges: "1-3",
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });

  expect(fs.existsSync(pdfPath)).toBeTruthy();
  expect(countPdfPages(pdfPath)).toBe(3);

  // Quality-control previews: PDF pages are hard to inspect programmatically,
  // so each page surface is also saved as an image outside the deliverables.
  const previewDir = path.join(process.cwd(), "test-results", "fiverr-pdf");
  fs.mkdirSync(previewDir, { recursive: true });
  await page.evaluate(() =>
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior }),
  );

  for (const id of ["pdf-page-1", "pdf-page-2", "pdf-page-3"]) {
    const box = await page.locator(`#${id}`).boundingBox();
    await page.screenshot({
      path: path.join(previewDir, `${id}.png`),
      fullPage: true,
      clip: {
        x: Math.round(box?.x ?? 0),
        y: Math.round(box?.y ?? 0),
        width: 1280,
        height: 769,
      },
    });
  }
});

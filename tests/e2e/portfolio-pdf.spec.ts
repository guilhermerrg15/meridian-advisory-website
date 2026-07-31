import { expect, test } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

const outputDir = path.join(
  process.cwd(),
  "portfolio-assets",
  "business-website",
);

test("export portfolio case study PDF", async ({ page }) => {
  fs.mkdirSync(outputDir, { recursive: true });
  await page.goto("/portfolio-case-study", { waitUntil: "networkidle" });
  await expect(
    page.getByRole("heading", {
      name: /meridian advisory — boutique consulting website/i,
    }),
  ).toBeVisible();

  const pdfPath = path.join(outputDir, "business-website-case-study.pdf");
  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    margin: { top: "16mm", right: "14mm", bottom: "16mm", left: "14mm" },
  });

  expect(fs.existsSync(pdfPath)).toBeTruthy();
});

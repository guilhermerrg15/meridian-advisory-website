import fs from "node:fs";
import path from "node:path";

/**
 * Contexts created through `browser.newContext()` do not inherit `use.baseURL`,
 * so specs build absolute URLs from this value.
 */
export const baseURL = process.env.FIVERR_BASE_URL ?? "http://127.0.0.1:3100";

export const assetsDir = path.join(
  process.cwd(),
  "fiverr-assets",
  "business-website",
);

/**
 * Captures are mirrored into `public/` so the hidden showcase route can compose
 * them into the gallery, PDF, and video frames.
 */
export const capturesDir = path.join(
  process.cwd(),
  "public",
  "fiverr-captures",
);

export function ensureDirs() {
  fs.mkdirSync(assetsDir, { recursive: true });
  fs.mkdirSync(capturesDir, { recursive: true });
}

export function readPngSize(filePath: string) {
  const buffer = fs.readFileSync(filePath);
  const signature = buffer.subarray(0, 8).toString("hex");
  if (signature !== "89504e470d0a1a0a") {
    throw new Error(`${filePath} is not a PNG file`);
  }
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

/** Waits for webfonts, images, and entrance animations to settle. */
export async function settlePage(
  page: import("@playwright/test").Page,
  extraDelay = 700,
) {
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(async () => {
    const images = Array.from(document.images);
    await Promise.all(
      images
        .filter((image) => !image.complete)
        .map(
          (image) =>
            new Promise((resolve) => {
              image.addEventListener("load", resolve, { once: true });
              image.addEventListener("error", resolve, { once: true });
            }),
        ),
    );
  });
  await page.waitForTimeout(extraDelay);
}

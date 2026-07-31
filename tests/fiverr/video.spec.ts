import { expect, test } from "@playwright/test";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import ffmpegStatic from "ffmpeg-static";
import { assetsDir, baseURL, ensureDirs } from "./helpers";

/**
 * Records a silent promotional clip with controlled browser automation.
 *
 * Playwright only writes VP8 WebM, so the recording is transcoded to H.264
 * MP4 with the ffmpeg binary shipped by the `ffmpeg-static` dev dependency.
 * The exact command is logged and documented in the asset README.
 */

const VIDEO = { width: 1280, height: 720 };
const workDir = path.join(process.cwd(), "test-results", "fiverr-clip");
const outputFile = path.join(assetsDir, "business-website-clip.mp4");

/** Blank frames recorded before the title screen paints are trimmed away. */
const LEAD_IN_TRIM_SECONDS = 1;

const HOLD = {
  title: 2600,
  homeIntro: 1400,
  homeScroll: 2400,
  servicesIntro: 1000,
  servicesScroll: 1600,
  contactPause: 700,
  contactSettle: 900,
  mobile: 2200,
  outro: 2600,
};

/**
 * Prefers the binary installed by `ffmpeg-static`; falls back to a system
 * ffmpeg on PATH when the download step was skipped.
 */
function resolveFfmpeg() {
  if (ffmpegStatic && fs.existsSync(ffmpegStatic)) {
    return ffmpegStatic;
  }
  return "ffmpeg";
}

const ffmpeg = resolveFfmpeg();

async function smoothScroll(
  page: import("@playwright/test").Page,
  distance: number,
  duration: number,
) {
  await page.evaluate(
    ({ distance, duration }) =>
      new Promise<void>((resolve) => {
        const start = window.scrollY;
        const startedAt = performance.now();
        const step = (now: number) => {
          const progress = Math.min(1, (now - startedAt) / duration);
          const eased =
            progress < 0.5
              ? 2 * progress * progress
              : -1 + (4 - 2 * progress) * progress;
          window.scrollTo({
            top: start + distance * eased,
            behavior: "instant" as ScrollBehavior,
          });
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            resolve();
          }
        };
        requestAnimationFrame(step);
      }),
    { distance, duration },
  );
}

function probeDurationSeconds(file: string) {
  let output = "";
  try {
    output = execFileSync(ffmpeg, ["-hide_banner", "-i", file], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch (error) {
    output = (error as { stderr?: string }).stderr ?? "";
  }

  const match = output.match(/Duration:\s*(\d+):(\d+):(\d+(?:\.\d+)?)/);
  if (!match) {
    throw new Error(`Could not read the duration of ${file}`);
  }
  return Number(match[1]) * 3600 + Number(match[2]) * 60 + Number(match[3]);
}

test("record and encode the promotional clip", async ({ browser }) => {
  ensureDirs();
  fs.rmSync(workDir, { recursive: true, force: true });
  fs.mkdirSync(workDir, { recursive: true });

  const context = await browser.newContext({
    viewport: VIDEO,
    deviceScaleFactor: 1,
    recordVideo: { dir: workDir, size: VIDEO },
  });
  const page = await context.newPage();

  // 1 — opening title screen (first visible frame, used as the thumbnail)
  await page.goto(`${baseURL}/fiverr-showcase/video/title`, {
    waitUntil: "load",
  });
  await page.waitForTimeout(HOLD.title);

  // 2 — home page hero, then a slow scroll through the services overview
  await page.goto(`${baseURL}/`, { waitUntil: "load" });
  await page.waitForTimeout(HOLD.homeIntro);
  await smoothScroll(page, 1500, HOLD.homeScroll);

  // 3 — navigation to another page
  await page
    .getByRole("navigation", { name: "Primary" })
    .getByRole("link", { name: "Services" })
    .click();
  await page.waitForURL("**/services");
  await page.waitForTimeout(HOLD.servicesIntro);
  await smoothScroll(page, 900, HOLD.servicesScroll);

  // 4 — contact form interaction
  await page
    .getByRole("navigation", { name: "Primary" })
    .getByRole("link", { name: "Contact" })
    .click();
  await page.waitForURL("**/contact");
  await page.waitForTimeout(HOLD.contactPause);
  await page.locator("#name").pressSequentially("Alex Moreira", { delay: 55 });
  await page
    .locator("#email")
    .pressSequentially("alex@northwind.example", { delay: 35 });
  await page.locator("#serviceInterest").selectOption("strategy");
  await page.waitForTimeout(HOLD.contactSettle);

  // 5 — responsive frame
  await page.goto(`${baseURL}/fiverr-showcase/video/mobile`, {
    waitUntil: "load",
  });
  await page.waitForTimeout(HOLD.mobile);

  // 6 — closing screen
  await page.goto(`${baseURL}/fiverr-showcase/video/outro`, {
    waitUntil: "load",
  });
  await page.waitForTimeout(HOLD.outro);

  await context.close();

  const recording = fs
    .readdirSync(workDir)
    .find((file) => file.endsWith(".webm"));
  expect(recording, "Playwright did not produce a WebM recording").toBeTruthy();

  const webmPath = path.join(workDir, recording as string);
  const ffmpegArgs = [
    "-y",
    "-ss",
    String(LEAD_IN_TRIM_SECONDS),
    "-i",
    webmPath,
    "-vf",
    "fps=30,scale=1280:720:flags=lanczos",
    "-c:v",
    "libx264",
    "-preset",
    "slow",
    "-crf",
    "23",
    "-pix_fmt",
    "yuv420p",
    "-profile:v",
    "high",
    "-movflags",
    "+faststart",
    "-an",
    outputFile,
  ];

  console.log(`ffmpeg ${ffmpegArgs.join(" ")}`);
  execFileSync(ffmpeg, ffmpegArgs, { stdio: "ignore" });

  // First frame is kept as a quality-control artifact for the thumbnail check.
  execFileSync(
    ffmpeg,
    [
      "-y",
      "-i",
      outputFile,
      "-frames:v",
      "1",
      path.join(workDir, "first-frame.png"),
    ],
    { stdio: "ignore" },
  );

  const duration = probeDurationSeconds(outputFile);
  const sizeMb = fs.statSync(outputFile).size / (1024 * 1024);
  console.log(
    `clip duration: ${duration.toFixed(2)}s · size: ${sizeMb.toFixed(2)} MB`,
  );

  expect(duration).toBeGreaterThanOrEqual(15);
  expect(duration).toBeLessThanOrEqual(22);
  expect(sizeMb).toBeLessThan(20);
});

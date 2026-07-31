import { expect, test } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import {
  assetsDir,
  baseURL,
  capturesDir,
  ensureDirs,
  readPngSize,
  settlePage,
} from "./helpers";

/**
 * Real browser captures of the finished site. Everything downstream (gallery
 * image, PDF, video frames) composes these files, so this spec runs first.
 */

const DESKTOP = { width: 1440, height: 1000 };
const MOBILE = { width: 390, height: 844 };
const SCALE = 2;

function outputPath(file: string) {
  return path.join(assetsDir, file);
}

/** Writes the deliverable and mirrors it into `public/` for the showcase route. */
function mirror(file: string) {
  fs.copyFileSync(outputPath(file), path.join(capturesDir, file));
}

test("export source screenshots of the live site", async ({ browser }) => {
  ensureDirs();

  // Nothing promotional may be captured from a page that is logging errors or
  // hydration mismatches.
  const consoleProblems: string[] = [];
  const watchPage = (page: import("@playwright/test").Page) => {
    page.on("console", (message) => {
      if (message.type() === "error") {
        consoleProblems.push(message.text());
      }
    });
    page.on("pageerror", (error) => consoleProblems.push(error.message));
  };

  const desktop = await browser.newContext({
    viewport: DESKTOP,
    deviceScaleFactor: SCALE,
  });
  const desktopPage = await desktop.newPage();
  watchPage(desktopPage);

  await desktopPage.goto(`${baseURL}/`, { waitUntil: "networkidle" });
  await expect(
    desktopPage.getByRole("heading", {
      name: /clarity for complex business decisions/i,
    }),
  ).toBeVisible();
  await settlePage(desktopPage);
  await desktopPage.screenshot({
    path: outputPath("desktop-home.png"),
    animations: "disabled",
  });

  await desktopPage.goto(`${baseURL}/services`, { waitUntil: "networkidle" });
  await settlePage(desktopPage);
  await desktopPage.screenshot({
    path: outputPath("desktop-services.png"),
    animations: "disabled",
  });

  await desktop.close();

  // Taller viewport so the whole card is captured without the sticky header
  // scrolling over it.
  const formContext = await browser.newContext({
    viewport: { width: 1440, height: 1400 },
    deviceScaleFactor: SCALE,
  });
  const formPage = await formContext.newPage();
  watchPage(formPage);
  await formPage.goto(`${baseURL}/contact`, { waitUntil: "networkidle" });
  await settlePage(formPage);

  const formCard = formPage
    .locator('form[data-testid="contact-form"]')
    .locator("xpath=..");
  await expect(formCard).toBeVisible();
  await formCard.screenshot({
    path: outputPath("contact-form.png"),
    animations: "disabled",
  });
  await formContext.close();

  const mobile = await browser.newContext({
    viewport: MOBILE,
    deviceScaleFactor: SCALE,
    isMobile: true,
    hasTouch: true,
  });
  const mobilePage = await mobile.newPage();
  watchPage(mobilePage);

  await mobilePage.goto(`${baseURL}/`, { waitUntil: "networkidle" });
  await settlePage(mobilePage);
  await mobilePage.screenshot({
    path: outputPath("mobile-home.png"),
    animations: "disabled",
  });

  const menuButton = mobilePage.getByRole("button", { name: /open menu/i });
  await menuButton.click();
  await expect(
    mobilePage
      .getByRole("banner")
      .getByRole("link", { name: "Case Studies", exact: true }),
  ).toBeVisible();
  await mobilePage.waitForTimeout(400);
  await mobilePage.screenshot({
    path: outputPath("mobile-navigation.png"),
    animations: "disabled",
  });

  await mobile.close();

  const files = [
    "desktop-home.png",
    "desktop-services.png",
    "contact-form.png",
    "mobile-home.png",
    "mobile-navigation.png",
  ];

  for (const file of files) {
    expect(fs.existsSync(outputPath(file))).toBeTruthy();
    mirror(file);
  }

  expect(readPngSize(outputPath("desktop-home.png"))).toEqual({
    width: DESKTOP.width * SCALE,
    height: DESKTOP.height * SCALE,
  });
  expect(readPngSize(outputPath("mobile-home.png"))).toEqual({
    width: MOBILE.width * SCALE,
    height: MOBILE.height * SCALE,
  });

  expect(consoleProblems, "captured pages logged browser errors").toEqual([]);
});

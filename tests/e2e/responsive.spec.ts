import { expect, test } from "@playwright/test";

const viewports = [
  { width: 375, height: 812 },
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1440, height: 900 },
];

for (const viewport of viewports) {
  test(`no horizontal overflow on home at ${viewport.width}px`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    await page.goto("/", { waitUntil: "networkidle" });
    const overflow = await page.evaluate(() => {
      const doc = document.documentElement;
      return {
        scrollWidth: doc.scrollWidth,
        clientWidth: doc.clientWidth,
      };
    });
    expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.clientWidth + 1);
    await expect(
      page.getByRole("heading", {
        name: /clarity for complex business decisions/i,
      }),
    ).toBeVisible();
  });
}

test("mobile navigation opens, focuses, and closes with Escape", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "networkidle" });

  const menuButton = page.getByRole("button", { name: /open menu/i });
  await menuButton.click();

  const closeButton = page.getByRole("button", { name: /close menu/i });
  await expect(closeButton).toBeVisible();

  const menuId = await closeButton.getAttribute("aria-controls");
  expect(menuId).toBeTruthy();
  await expect(page.locator(`#${menuId} a`).first()).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: /open menu/i })).toBeFocused();
});

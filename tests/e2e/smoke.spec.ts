import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/about",
  "/services",
  "/case-studies",
  "/contact",
  "/privacy",
];

for (const route of routes) {
  test(`smoke: ${route} renders`, async ({ page }) => {
    const response = await page.goto(route, { waitUntil: "networkidle" });
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("main#main-content")).toBeVisible();
    await expect(page.getByRole("banner")).toBeVisible();
    await expect(
      page
        .getByRole("banner")
        .getByRole("link", { name: /meridian advisory home/i }),
    ).toBeVisible();
  });
}

test("custom 404 page", async ({ page }) => {
  const response = await page.goto("/this-route-does-not-exist", {
    waitUntil: "networkidle",
  });
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: /off the map/i }),
  ).toBeVisible();
});

test("contact form shows validation errors", async ({ page }) => {
  await page.goto("/contact", { waitUntil: "networkidle" });
  await expect(page.getByTestId("contact-form")).toBeVisible();
  await page.getByRole("button", { name: /send message/i }).click();
  await expect(
    page.getByText(/please enter your full name/i),
  ).toBeVisible({ timeout: 10000 });
});

import { defineConfig, devices } from "@playwright/test";

/**
 * Asset generation runs against the production server (`next start`) so the
 * development overlay never appears in a screenshot, PDF, or video frame.
 * Run `npm run build` before using these specs individually; `npm run
 * fiverr:assets` does it for you.
 */
export default defineConfig({
  testDir: "./tests/fiverr",
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: "list",
  timeout: 180_000,
  use: {
    baseURL: "http://127.0.0.1:3100",
    trace: "off",
    video: "off",
  },
  webServer: {
    command: "npm start -- --hostname 127.0.0.1 --port 3100",
    url: "http://127.0.0.1:3100",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});

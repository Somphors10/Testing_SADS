import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    video: 'on',
    launchOptions: {
      slowMo: 5000, 
    },
    headless: false,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        viewport: null,
        launchOptions: {
          slowMo: 1000,
          args: ['--start-maximized'],
        },
      },
    },
  ],
});
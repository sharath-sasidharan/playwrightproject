import { PlaywrightTestConfig } from '@playwright/test'

module.exports = config({
  timeout: 5 * 60 * 1000,
  retries: 0,
  reporter: [
    ['html'],
    ['allure-playwright', { outputFolder: 'my-allure-results' }],
  ],
  use: {
    headless: false,
    viewport: null, //viewport: { width: 1280, height: 720 },
    launchOptions: { args: ['--start-maximized'] },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
    },
  ],
})

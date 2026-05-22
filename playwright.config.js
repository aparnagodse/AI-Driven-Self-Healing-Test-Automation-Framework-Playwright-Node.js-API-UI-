import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30000,

  reporter: [
    ['html'],
    ['line'],
    ['allure-playwright']
  ],

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure'
  }
});
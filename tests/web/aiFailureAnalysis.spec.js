import { test, expect } from '@playwright/test';

test('Open Banking Account Summary Validation', async ({ page }) => {

  await page.goto('https://www.nab.com.au/');

  // Intentional failure to demonstrate AI-assisted failure analysis
  await expect(
    page.locator('#customer-account-summary')
  ).toBeVisible({ timeout: 3000 });

});
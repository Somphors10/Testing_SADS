import { test } from '@playwright/test';
import { CamHcPage } from '../pages/CamHcPage';
import { LoginPage } from '../pages/LoginPage';

test('HC citizen scorecard flow', async ({ page }) => {
  test.setTimeout(3 * 60 * 1000);

  const loginPage = new LoginPage(page);
  const camHcPage = new CamHcPage(page);

  await loginPage.goto();
  await loginPage.login('cafkp1', 'cafkp1123');
  await camHcPage.runFullFlow();
});

import { test } from '@playwright/test';
import { CamCsPage } from '../pages/CamCsPage';
import { LoginPage } from '../pages/LoginPage';

test('CS citizen scorecard flow', async ({ page }) => {
  test.setTimeout(5 * 60 * 1000);

  const loginPage = new LoginPage(page);
  const camCsPage = new CamCsPage(page);

  await loginPage.goto();
  await loginPage.login('cafkp1', 'cafkp1123');
  await camCsPage.runFullFlow();
});

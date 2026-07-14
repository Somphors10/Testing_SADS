import { test } from '@playwright/test';
import { CamPsPage } from '../pages/CamPsPage';
import { LoginPage } from '../pages/LoginPage';

test('PS citizen scorecard flow', async ({ page }) => {
  test.setTimeout(3 * 60 * 1000);

  const loginPage = new LoginPage(page);
  const camPsPage = new CamPsPage(page);

  await loginPage.goto();
  await loginPage.login('cafkp1', 'cafkp1123');
  await camPsPage.runFullFlow();
});

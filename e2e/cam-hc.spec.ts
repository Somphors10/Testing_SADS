import { test } from '@playwright/test';
import { CamHcPage } from '../pages/CamHcPage';
import { LoginPage } from '../pages/LoginPage';

test('HC citizen scorecard flow', async ({ page }) => {
  test.setTimeout(5 * 60 * 1000);

  const loginPage = new LoginPage(page);
  const camHcPage = new CamHcPage(page);

  await loginPage.goto();
  await loginPage.login('cafpvh', 'cafpvh123');
  await camHcPage.runFullFlow();
});

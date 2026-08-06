import { test } from '@playwright/test';
import { CamCsPage } from '../pages/CamCsPage';
import { LoginPage } from '../pages/LoginPage';

// Faster than global slowMo (1000ms) but still visible — tune 200–500 as needed
test.use({
  launchOptions: {
    slowMo: 400,
    args: ['--start-maximized'],
  },
});

test('CS citizen scorecard flow', async ({ page }) => {
  test.setTimeout(5 * 60 * 1000);

  const loginPage = new LoginPage(page);
  const camCsPage = new CamCsPage(page);

  await loginPage.goto();
  await loginPage.login('cafpvh', 'cafpvh123');
  await camCsPage.runFullFlow();
});

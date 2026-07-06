import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sads.finztrust.com/admin/login');
  await page.getByRole('textbox', { name: 'ឈ្មោះអ្នកប្រើប្រាស់*' }).fill('cafkp');
  await page.getByRole('textbox', { name: 'ពាក្យសម្ងាត់*' }).click();
  await page.getByRole('textbox', { name: 'ពាក្យសម្ងាត់*' }).fill('cafkp123');
  await page.getByRole('button', { name: 'ចូលក្នុងប្រព័ន្ធ' }).click();
  await page.getByRole('link', { name: 'ការពិនិត្យវាយតម្លៃអំពីលទ្ធផលការងារ' }).click();
  await page.getByRole('button', { name: 'គ្រប់គ្រងបណ្ណដាក់ពិន្ទុ' }).click();
  await page.getByRole('button', { name: 'បណ្ណដាក់ពិន្ទុ ប្រជាពលរដ្ឋ' }).click();
  await page.getByRole('dialog').getByRole('link', { name: 'បណ្ណដាក់ពិន្ទុ ប្រជាពលរដ្ឋ' }).click();
  await page.getByRole('textbox', { name: 'ឈ្មោះក្រុម (ឧទាហរណ៍៖ ក្រុមទី១...)' }).click();
  await page.getByRole('textbox', { name: 'ឈ្មោះក្រុម (ឧទាហរណ៍៖ ក្រុមទី១...)' }).fill('group 1');
  await page.getByRole('button', { name: 'បន្ទាប់' }).click();
  await page.getByRole('textbox', { name: 'កាលបរិច្ឆេទដាក់ពិន្ទុ*' }).click();
  await page.getByRole('option', { name: '6', exact: true }).click();
  await page.locator('.fi-sc.fi-sc-has-gap.fi-grid.fi-section-content > div > .fi-sc-component > .fi-in-entry > .fi-in-entry-content-col > .fi-in-entry-content-ctn > .fi-in-entry-content > .fi-size-sm > div').first().click();
});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sads.finztrust.com/admin/login');
  await page.getByRole('textbox', { name: 'ឈ្មោះអ្នកប្រើប្រាស់*' }).fill('admin');
  await page.getByRole('textbox', { name: 'ពាក្យសម្ងាត់*' }).click();
  await page.getByRole('textbox', { name: 'ពាក្យសម្ងាត់*' }).fill('password');
  await page.getByRole('button', { name: 'ចូលក្នុងប្រព័ន្ធ' }).click();
  await page.getByRole('textbox', { name: 'ពាក្យសម្ងាត់*' }).click();
  await page.getByRole('textbox', { name: 'ពាក្យសម្ងាត់*' }).fill('password23');
  await page.getByRole('button', { name: 'ចូលក្នុងប្រព័ន្ធ' }).click();
  await page.getByRole('textbox', { name: 'ពាក្យសម្ងាត់*' }).click();
  await page.getByRole('textbox', { name: 'ពាក្យសម្ងាត់*' }).fill('password123');
  await page.getByRole('button', { name: 'ចូលក្នុងប្រព័ន្ធ' }).click();
  await page.getByRole('link', { name: 'ការពិនិត្យវាយតម្លៃអំពីលទ្ធផលការងារ' }).click();
  await page.getByRole('button', { name: 'បង្កើតទម្រង់ដាក់ពិន្ទុ' }).nth(1).click();
  await page.getByRole('button', { name: 'បណ្ណដាក់ពិន្ទុ ក្រុមជនងាយរងគ្រោះ' }).click();
  await page.getByRole('dialog').getByRole('link', { name: 'បណ្ណដាក់ពិន្ទុ ក្រុមជនងាយរងគ្រោះ' }).click();
  await page.getByRole('textbox', { name: 'ឈ្មោះក្រុម (ឧទាហរណ៍៖ ក្រុមទី១...)' }).fill('group 2');
  await page.getByRole('button', { name: 'បន្ទាប់' }).click();
});
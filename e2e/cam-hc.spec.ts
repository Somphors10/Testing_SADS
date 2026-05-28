import { test, expect } from '@playwright/test';

//pass

test('test', async ({ page }) => {
  test.setTimeout(3 * 60 * 1000);
  await page.goto('https://sads.finztrust.com/admin/login');

  await page.getByRole('textbox', { name: 'ឈ្មោះអ្នកប្រើប្រាស់*' }).fill('admin');
  await page.getByRole('textbox', { name: 'ពាក្យសម្ងាត់*' }).click();
  await page.getByRole('textbox', { name: 'ពាក្យសម្ងាត់*' }).fill('password123');
  await page.getByRole('button', { name: 'ចូលក្នុងប្រព័ន្ធ' }).click();

  //Sevice provider
  // await page.getByRole('link', { name: 'ការពិនិត្យវាយតម្លៃអំពីលទ្ធផលការងារ' }).click();
  // await page.getByRole('button', { name: 'បង្កើតទម្រង់ដាក់ពិន្ទុ' }).first().click();
  // await page.getByRole('table').getByRole('link', { name: 'បណ្ណដាក់ពិន្ទុ អ្នកផ្តល់សេវា' }).click();

  //Citizen
  // await page.getByRole('link', { name: 'ការពិនិត្យវាយតម្លៃអំពីលទ្ធផលការងារ' }).click();
  // await page.getByRole('button', { name: 'បង្កើតទម្រង់ដាក់ពិន្ទុ' }).nth(1).click();
  // await page.getByRole('button', { name: 'បណ្ណដាក់ពិន្ទុ ប្រជាពលរដ្ឋ' }).click();
  // await page.getByRole('dialog').getByRole('link', { name: 'បណ្ណដាក់ពិន្ទុ ប្រជាពលរដ្ឋ' }).click();
  // const groupDialog = page.getByRole('dialog');
  // await groupDialog
  //   .getByRole('textbox', { name: 'ឈ្មោះក្រុម (ឧទាហរណ៍៖ ក្រុមទី១...)' })
  //   .fill('group 1');

  // const nextInDialog = groupDialog.getByRole('button', { name: 'បន្ទាប់' });
  // await expect(nextInDialog).toBeEnabled();
  // await nextInDialog.click();

  //Vulnerable group
  await page.getByRole('link', { name: 'ការពិនិត្យវាយតម្លៃអំពីលទ្ធផលការងារ' }).click();
  await page.getByRole('button', { name: 'បង្កើតទម្រង់ដាក់ពិន្ទុ' }).first().click();
  await page.getByRole('button', { name: 'បណ្ណដាក់ពិន្ទុ ក្រុមជនងាយរងគ្រោះ' }).click();
  await page.getByRole('dialog').getByRole('link', { name: 'បណ្ណដាក់ពិន្ទុ ក្រុមជនងាយរងគ្រោះ' }).click();
  const groupDialog = page.getByRole('dialog');
  await groupDialog
    .getByRole('textbox', { name: 'ឈ្មោះក្រុម (ឧទាហរណ៍៖ ក្រុមទី១...)' })
    .fill('group 3');

  const nextInDialog = groupDialog.getByRole('button', { name: 'បន្ទាប់' });
  await expect(nextInDialog).toBeEnabled();
  await nextInDialog.click();

  await page.getByRole('textbox', { name: 'កាលបរិច្ឆេទដាក់ពិន្ទុ*' }).click();
  await page.getByRole('option', { name: '29' }).click();
  await page.keyboard.press('Escape');
  await page.getByRole('spinbutton', { name: /ចំនួនអ្នកចូលសរុប/ }).first().fill('30');
  await page.getByRole('spinbutton', { name: /យុវជន/ }).first().fill('5');
  await page.getByRole('spinbutton', { name: /ស្ត្រី|ស្រ្តី/ }).first().fill('5');
  await page.getByRole('spinbutton', { name: /ចាស់/ }).first().fill('5');
  await page.getByRole('spinbutton', { name: /កុមារា/ }).first().fill('5');
  await page.getByRole('spinbutton', { name: /កុមារី/ }).first().fill('2');
  await page.getByRole('spinbutton', { name: /ជនជាតិភាគតិច/ }).first().fill('5');
  await page.getByRole('spinbutton', { name: /ជនជាតិដើមភាគតិច/ }).first().fill('0');
  await page.getByRole('spinbutton', { name: /គ្រួសារក្រីក្រ/ }).first().fill('5');
  await page.getByRole('spinbutton', { name: /ជនពិការ/ }).first().fill('0');
  await page.getByRole('button', { name: 'បន្ទាប់' }).click();
  await page.getByRole('button', { name: 'បន្ថែមជួរថ្មី' }).click();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).click();
  await page.getByRole('option', { name: 'HC40 ឯកសណ្ថាន' }).click();
  await page.getByRole('textbox', { name: 'Brainstorm text' }).click();
  await page.getByRole('textbox', { name: 'Brainstorm text' }).press('Alt+e');
  await page.getByRole('textbox', { name: 'Brainstorm text' }).fill('ឯកសណ្ថាន');
  await page.locator('li:nth-child(1)').getByRole('spinbutton').last().fill('5');
  await page.getByRole('button', { name: 'បន្ថែមជួរថ្មី' }).click();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
  await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: /^HC05\b/ }).first().click();
  await page.getByRole('textbox', { name: 'Brainstorm text' }).nth(1).fill('ឡដុតសម្រាម');
  await page.locator('li:nth-child(2)').getByRole('spinbutton').last().fill('4');
  await page.getByRole('button', { name: 'បន្ថែមជួរថ្មី' }).click();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
  await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: /^HC06\b/ }).first().click();
  await page.getByRole('textbox', { name: 'Brainstorm text' }).nth(2).fill('សេវាសង្រ្គោះបន្ទាន់');
  await page.locator('li:nth-child(3)').getByRole('spinbutton').last().fill('3');
  await page.getByRole('button', { name: 'បន្ថែមជួរថ្មី' }).click();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
  await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: /^HC38\b/ }).first().click();
  await page.getByRole('textbox', { name: 'Brainstorm text' }).nth(3).fill('កន្លែងដាក់ កង់ ម៉ូតូ ឡាន');
  await page.locator('li:nth-child(4)').getByRole('spinbutton').last().fill('2');
  await page.getByRole('button', { name: 'បន្ថែមជួរថ្មី' }).click();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
  await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: /^HC37\b/ }).first().click();
  await page.getByRole('textbox', { name: 'Brainstorm text' }).nth(4).fill('កន្លែងរង់ចាំ');
  await page.locator('li:nth-child(5)').getByRole('spinbutton').last().fill('1');
  await page.getByRole('button', { name: 'បន្ទាប់' }).click();
  await page.locator('body').press('AudioVolumeDown');
  await page.getByRole('button', { name: 'បន្ទាប់' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'ដំណើរការដាក់ពិន្ទុ' }).click();
  const page1 = await page1Promise;
  await page1.locator('label').nth(2).click();
  await page1.locator('div:nth-child(3) > .grid > div:nth-child(2) > .rating-label').click();
  await page1.locator('div:nth-child(4) > .grid > div:nth-child(3) > .rating-label').click();
  await page1.locator('div:nth-child(5) > .grid > div:nth-child(2) > .rating-label').click();
  await page1.locator('div:nth-child(6) > .grid > div:nth-child(3) > .rating-label').click();
  await page1.locator('form div').filter({ hasText: 'បញ្ជូន' }).click();
  await page1.getByRole('link', { name: 'បន្ថែមការដាក់ពិន្ទុ' }).click();
  await page1.locator('label').nth(3).click();
  await page1.locator('div:nth-child(3) > .grid > div:nth-child(3) > .rating-label').click();
  await page1.locator('div:nth-child(3) > .grid > div:nth-child(3) > .rating-label').click();
  await page1.locator('div:nth-child(4) > .grid > div:nth-child(4) > .rating-label').click();
  await page1.locator('div:nth-child(5) > .grid > div:nth-child(3) > .rating-label').click();
  await page1.locator('div:nth-child(6) > .grid > div:nth-child(4) > .rating-label').click();
  await page1.getByRole('button', { name: 'បញ្ជូន' }).click();
  await page1.getByRole('link', { name: 'បន្ថែមការដាក់ពិន្ទុ' }).click();
  await page1.locator('label').first().click();
  await page1.locator('div:nth-child(3) > .grid > div:nth-child(2) > .rating-label').click();
  await page1.locator('div:nth-child(4) > .grid > div:nth-child(3) > .rating-label').click();
  await page1.locator('div:nth-child(5) > .grid > div:nth-child(4) > .rating-label').click();
  await page1.locator('div:nth-child(5) > .grid > div:nth-child(4) > .rating-label').click();
  await page1.locator('div:nth-child(6) > .grid > div:nth-child(5) > .rating-label').click();
  await page1.locator('form div').filter({ hasText: 'បញ្ជូន' }).click();
  await page1.getByRole('button', { name: 'បញ្ឈប់ការដាក់ពិន្ទុ' }).click();
  await page1.getByRole('link', { name: 'យល់ព្រម' }).click();
  await page.getByRole('button', { name: 'បាទ/ចាស' }).click();
  await page.getByRole('listitem').filter({ hasText: /HC40/ }).first().getByPlaceholder('ចំណុចខ្លាំង').click();
  await page.getByRole('listitem').filter({ hasText: /HC40/ }).first().getByPlaceholder('ចំណុចខ្លាំង').fill('ឯកសណ្ថាន');
  await page.getByRole('listitem').filter({ hasText: /HC40/ }).first().getByPlaceholder('ចំណុចខ្សោយ').click();
  await page.getByRole('listitem').filter({ hasText: /HC40/ }).first().getByPlaceholder('ចំណុចខ្សោយ').fill('ឯកសណ្ថាន');
  await page.getByRole('listitem').filter({ hasText: /HC40/ }).first().getByPlaceholder('មតិយោបល់').click();
  await page.getByRole('listitem').filter({ hasText: /HC40/ }).first().getByPlaceholder('មតិយោបល់').fill('ឯកសណ្ថាន');
  await page.getByText('ស្វែងរក ឬបញ្ចូល').first().click();
  await page.locator('.search-container').first().click();
  await page.getByRole('textbox', { name: 'ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី' }).fill('ឯកសណ្ថាន');
  await page.getByRole('dialog').getByText('HC40 - ឯកសណ្ថាន').click();
  await page.getByRole('button', { name: 'រក្សាទុក' }).click();
  await page.getByRole('combobox').first().selectOption('1');
  await page.getByRole('combobox').nth(1).selectOption('1');
  await page.getByRole('listitem').filter({ hasText: /HC05/ }).first().getByPlaceholder('ចំណុចខ្លាំង').click();
  await page.getByRole('listitem').filter({ hasText: /HC05/ }).first().getByPlaceholder('ចំណុចខ្លាំង').fill('ឡដុតសម្រាម');
  await page.getByRole('listitem').filter({ hasText: /HC05/ }).first().getByPlaceholder('ចំណុចខ្សោយ').click();
  await page.getByRole('listitem').filter({ hasText: /HC05/ }).first().getByPlaceholder('ចំណុចខ្សោយ').fill('ឡដុតសម្រាម');
  await page.getByRole('listitem').filter({ hasText: /HC05/ }).first().getByPlaceholder('មតិយោបល់').click();
  await page.getByRole('listitem').filter({ hasText: /HC05/ }).first().getByPlaceholder('មតិយោបល់').fill('ឡដុតសម្រាម');
  await page.getByText('ស្វែងរក ឬបញ្ចូល').nth(1).click();
  await page.locator('li:nth-child(2) > .fi-fo-repeater-item-content > .fi-sc > .fi-grid-col.lg\\:fi-grid-col-span > .fi-sc-component > .form-row > .premium-modal > div:nth-child(2) > .search-container').click();
  await page.getByRole('textbox', { name: 'ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី' }).fill('ឡដុតសម្រាម');
  await page.locator('.premium-modal:visible > div:nth-child(2) > div:nth-child(2) > div').filter({ hasText: 'ឡដុតសម្រាម' }).first().click();

  await page.getByRole('button', { name: 'រក្សាទុក' }).click();
  await page.getByRole('combobox').nth(2).selectOption('5');
  await page.getByRole('combobox').nth(3).selectOption('6');

  await page.getByRole('listitem').filter({ hasText: /HC06/ }).first().getByPlaceholder('ចំណុចខ្លាំង').fill('សេវាសង្រ្គោះបន្ទាន់');
  await page.getByRole('listitem').filter({ hasText: /HC06/ }).first().getByPlaceholder('ចំណុចខ្សោយ').fill('សេវាសង្រ្គោះបន្ទាន់');
  await page.getByRole('listitem').filter({ hasText: /HC06/ }).first().getByPlaceholder('មតិយោបល់').fill('សេវាសង្រ្គោះបន្ទាន់');
  await page.getByText('ស្វែងរក ឬបញ្ចូល').nth(2).click();
  await page.getByRole('textbox', { name: 'ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី' }).fill('សេវាសង្រ្គោះបន្ទាន់');
  await page.locator('.premium-modal:visible > div:nth-child(2) > div:nth-child(2) > div').filter({ hasText: 'សេវាសង្រ្គោះបន្ទាន់' }).first().click();

  await page.getByRole('button', { name: 'រក្សាទុក' }).click();
  await page.getByRole('combobox').nth(4).selectOption('5');
  await page.getByRole('combobox').nth(5).selectOption('7');

  await page.getByRole('listitem').filter({ hasText: /HC38/ }).first().getByPlaceholder('ចំណុចខ្លាំង').fill('កន្លែងដាក់ កង់ ម៉ូតូ ឡាន');
  await page.getByRole('listitem').filter({ hasText: /HC38/ }).first().getByPlaceholder('ចំណុចខ្សោយ').fill('កន្លែងដាក់ កង់ ម៉ូតូ ឡាន');
  await page.getByRole('listitem').filter({ hasText: /HC38/ }).first().getByPlaceholder('មតិយោបល់').fill('កន្លែងដាក់ កង់ ម៉ូតូ ឡាន');
  await page.getByText('ស្វែងរក ឬបញ្ចូល').nth(3).click();
  await page.getByRole('textbox', { name: 'ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី' }).fill('កន្លែងដាក់ កង់ ម៉ូតូ ឡាន');
  await page.locator('.premium-modal:visible > div:nth-child(2) > div:nth-child(2) > div').filter({ hasText: 'កន្លែងដាក់ កង់ ម៉ូតូ ឡាន' }).first().click();

  await page.getByRole('button', { name: 'រក្សាទុក' }).click();
  await page.getByRole('combobox').nth(6).selectOption('5');
  await page.getByRole('combobox').nth(7).selectOption('2');

  const hc37Row = page.getByRole('listitem').filter({ hasText: /HC37/ }).first();
  await hc37Row.getByPlaceholder('ចំណុចខ្លាំង').fill('កន្លែងរង់ចាំ');
  await hc37Row.getByPlaceholder('ចំណុចខ្សោយ').fill('កន្លែងរង់ចាំ');
  await hc37Row.getByPlaceholder('មតិយោបល់').fill('កន្លែងរង់ចាំ');
  await page.getByText('ស្វែងរក ឬបញ្ចូល').nth(4).click();
  await page.getByRole('textbox', { name: 'ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី' }).fill('កន្លែងរង់ចាំ');
  await page.locator('.premium-modal:visible > div:nth-child(2) > div:nth-child(2) > div').filter({ hasText: 'កន្លែងរង់ចាំ' }).first().click();

  await page.getByRole('button', { name: 'រក្សាទុក' }).click();
  await hc37Row.getByRole('combobox').first().selectOption('1');
  await hc37Row.getByRole('combobox').nth(1).selectOption('2');
  await page.getByRole('button', { name: 'បញ្ចប់' }).click();
  await page.getByRole('button', { name: 'យល់ព្រម' }).click();
});
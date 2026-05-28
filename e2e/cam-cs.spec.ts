import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(10 * 60 * 1000);
  await page.goto('https://sads.finztrust.com/admin/login');
  await page.getByRole('textbox', { name: 'ឈ្មោះអ្នកប្រើប្រាស់*' }).fill('admin');
  await page.getByRole('textbox', { name: 'ពាក្យសម្ងាត់*' }).click();
  await page.getByRole('textbox', { name: 'ពាក្យសម្ងាត់*' }).fill('password123');
  await page.getByRole('button', { name: 'ចូលក្នុងប្រព័ន្ធ' }).click();

  //Sevice provider
  // await page.getByRole('link', { name: 'ការពិនិត្យវាយតម្លៃអំពីលទ្ធផលការងារ' }).click();
  // await page.getByRole('button', { name: 'បង្កើតទម្រង់ដាក់ពិន្ទុ' }).first().click();
  // await page.getByRole('table').getByRole('link', { name: 'បណ្ណដាក់ពិន្ទុ អ្នកផ្តល់សេវា' }).click();

  // Citizen
  await page.getByRole('link', { name: 'ការពិនិត្យវាយតម្លៃអំពីលទ្ធផលការងារ' }).click();
  await page.getByRole('button', { name: 'បង្កើតទម្រង់ដាក់ពិន្ទុ' }).first().click();
  await page.getByRole('button', { name: 'បណ្ណដាក់ពិន្ទុ ប្រជាពលរដ្ឋ' }).click();
  await page.getByRole('dialog').getByRole('link', { name: 'បណ្ណដាក់ពិន្ទុ ប្រជាពលរដ្ឋ' }).click();
  const groupDialog = page.getByRole('dialog');
  await groupDialog
    .getByRole('textbox', { name: 'ឈ្មោះក្រុម (ឧទាហរណ៍៖ ក្រុមទី១...)' })
    .fill('group 1');

  const nextInDialog = groupDialog.getByRole('button', { name: 'បន្ទាប់' });
  await expect(nextInDialog).toBeEnabled();
  await nextInDialog.click();
  //Vulnerable group
  // await page.getByRole('link', { name: 'ការពិនិត្យវាយតម្លៃអំពីលទ្ធផលការងារ' }).click();
  // await page.getByRole('button', { name: 'បង្កើតទម្រង់ដាក់ពិន្ទុ' }).first().click();
  // await page.getByRole('button', { name: 'បណ្ណដាក់ពិន្ទុ ក្រុមជនងាយរងគ្រោះ' }).click();
  // await page.getByRole('dialog').getByRole('link', { name: 'បណ្ណដាក់ពិន្ទុ ក្រុមជនងាយរងគ្រោះ' }).click();
  // await page.getByRole('textbox', { name: 'ឈ្មោះក្រុម (ឧទាហរណ៍៖ ក្រុមទី១...)' }).fill('group 1');
  // await page.getByRole('button', { name: 'បន្ទាប់' }).click();



  await page.getByRole('textbox', { name: 'កាលបរិច្ឆេទដាក់ពិន្ទុ*' }).click();
  await page.getByRole('option', { name: '28' }).click();
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

  const addRowAndWaitForIndicatorPicker = async () => {
    const addRowButton = page.getByRole('button', { name: 'បន្ថែមជួរថ្មី' });
    const indicatorPickerButtons = page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true });
    const beforeCount = await indicatorPickerButtons.count();

    await addRowButton.scrollIntoViewIfNeeded();
    await addRowButton.click();
    await expect(indicatorPickerButtons).toHaveCount(beforeCount + 1);
  };

  await addRowAndWaitForIndicatorPicker();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
  await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: /^CS48\b/ }).first().click();
  await page.getByRole('textbox', { name: 'Brainstorm text' }).click();
  await page.getByRole('textbox', { name: 'Brainstorm text' }).fill('កន្លែងលាងដៃ');
  await page.locator('.custom-scoring-container-wrapper > button:nth-child(3)').click();
  await page.locator('.custom-scoring-container-wrapper > button:nth-child(3)').click();
  await page.locator('.custom-scoring-container-wrapper > button:nth-child(3)').click();
  await page.locator('.custom-scoring-container-wrapper > button:nth-child(3)').click();
  await page.locator('.custom-scoring-container-wrapper > button:nth-child(3)').click();
  await addRowAndWaitForIndicatorPicker();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
  await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: /^CS13\b/ }).first().click();
  await page.getByRole('textbox', { name: 'Brainstorm text' }).nth(1).fill('ម៉ោងពេលបំពេញការងារ');
  await page.locator('li:nth-child(2) > .fi-fo-repeater-item-content > div > div > div > .items-end > .fi-sc > div:nth-child(2) > .fi-sc-component > .custom-scoring-container-wrapper > button:nth-child(3)').click();
  await page.locator('li:nth-child(2) > .fi-fo-repeater-item-content > div > div > div > .items-end > .fi-sc > div:nth-child(2) > .fi-sc-component > .custom-scoring-container-wrapper > button:nth-child(3)').click();
  await page.locator('li:nth-child(2) > .fi-fo-repeater-item-content > div > div > div > .items-end > .fi-sc > div:nth-child(2) > .fi-sc-component > .custom-scoring-container-wrapper > button:nth-child(3)').click();
  await page.locator('li:nth-child(2) > .fi-fo-repeater-item-content > div > div > div > .items-end > .fi-sc > div:nth-child(2) > .fi-sc-component > .custom-scoring-container-wrapper > button:nth-child(3)').click();
  await addRowAndWaitForIndicatorPicker();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
  await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: /^CS05\b/ }).first().click();
  await page.getByRole('textbox', { name: 'Brainstorm text' }).nth(2).fill('ឡដុតសម្រាម');
  await page.locator('li:nth-child(3) > .fi-fo-repeater-item-content > div > div > div > .items-end > .fi-sc > div:nth-child(2) > .fi-sc-component > .custom-scoring-container-wrapper > button:nth-child(3)').click();
  await page.locator('li:nth-child(3) > .fi-fo-repeater-item-content > div > div > div > .items-end > .fi-sc > div:nth-child(2) > .fi-sc-component > .custom-scoring-container-wrapper > button:nth-child(3)').click();
  await page.locator('li:nth-child(3) > .fi-fo-repeater-item-content > div > div > div > .items-end > .fi-sc > div:nth-child(2) > .fi-sc-component > .custom-scoring-container-wrapper > button:nth-child(3)').click();
  await addRowAndWaitForIndicatorPicker();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
  await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: /^CS08\b/ }).first().click();
  await page.getByRole('textbox', { name: 'Brainstorm text' }).nth(3).fill('សួនច្បារ');
  await page.locator('li:nth-child(4) > .fi-fo-repeater-item-content > div > div > div > .items-end > .fi-sc > div:nth-child(2) > .fi-sc-component > .custom-scoring-container-wrapper > button:nth-child(3)').click();
  await page.locator('li:nth-child(4) > .fi-fo-repeater-item-content > div > div > div > .items-end > .fi-sc > div:nth-child(2) > .fi-sc-component > .custom-scoring-container-wrapper > button:nth-child(3)').click();
  await page.getByRole('button', { name: 'បន្ទាប់' }).click();
  await page.getByRole('button', { name: 'បន្ទាប់' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'ដំណើរការដាក់ពិន្ទុ' }).click();
  const page1 = await page1Promise;
  await page1.locator('label').nth(1).click();
  await page1.locator('div:nth-child(3) > .grid > div:nth-child(3) > .rating-label').click();
  await page1.locator('div:nth-child(4) > .grid > div:nth-child(4) > .rating-label').click();
  await page1.locator('div:nth-child(5) > .grid > div:nth-child(3) > .rating-label').click();
  await page1.locator('div:nth-child(6) > .grid > div:nth-child(2) > .rating-label').click();
  await page1.getByRole('button', { name: 'បញ្ជូន' }).click();
  await page1.getByRole('link', { name: 'បន្ថែមការដាក់ពិន្ទុ' }).click();
  await page1.locator('label').first().click();
  await page1.locator('label').first().click();
  await page1.locator('div:nth-child(3) > .grid > div:nth-child(2) > .rating-label').click();
  await page1.locator('div:nth-child(4) > .grid > div:nth-child(3) > .rating-label').click();
  await page1.locator('div:nth-child(5) > .grid > div:nth-child(4) > .rating-label').click();
  await page1.locator('div:nth-child(6) > .grid > div:nth-child(5) > .rating-label').click();
  await page1.locator('form div').filter({ hasText: 'បញ្ជូន' }).click();
  await page1.getByRole('link', { name: 'បន្ថែមការដាក់ពិន្ទុ' }).click();
  await page1.locator('label').nth(4).click();
  await page1.locator('div:nth-child(3) > .grid > div:nth-child(4) > .rating-label').click();
  await page1.locator('div:nth-child(4) > .grid > div:nth-child(3) > .rating-label').click();
  await page1.locator('div:nth-child(5) > .grid > div:nth-child(2) > .rating-label').click();
  await page1.locator('div:nth-child(6) > .grid > div > .rating-label').first().click();
  await page1.locator('form div').filter({ hasText: 'បញ្ជូន' }).click();
  await page1.getByRole('button', { name: 'បញ្ឈប់ការដាក់ពិន្ទុ' }).click();
  await page1.getByRole('link', { name: 'យល់ព្រម' }).click();
  await page.getByRole('button', { name: 'បាទ/ចាស' }).click();
  await page.getByRole('listitem').filter({ hasText: /CS48/ }).first().getByPlaceholder('ចំណុចខ្លាំង').click();
  await page.getByRole('listitem').filter({ hasText: /CS48/ }).first().getByPlaceholder('ចំណុចខ្លាំង').fill('កន្លែងលាងដៃ');
  await page.getByRole('listitem').filter({ hasText: /CS48/ }).first().getByPlaceholder('ចំណុចខ្សោយ').click();
  await page.getByRole('listitem').filter({ hasText: /CS48/ }).first().getByPlaceholder('ចំណុចខ្សោយ').fill('កន្លែងលាងដៃ');
  await page.getByRole('listitem').filter({ hasText: /CS48/ }).first().getByPlaceholder('មតិយោបល់').click();
  await page.getByRole('listitem').filter({ hasText: /CS48/ }).first().getByPlaceholder('មតិយោបល់').fill('កន្លែងលាងដៃ');
  await page.getByText('ស្វែងរក ឬបញ្ចូល').first().click();
  await page.getByRole('textbox', { name: 'ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី' }).click();
  await page.getByRole('textbox', { name: 'ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី' }).fill('កន្លែងលាងដៃ');
  await page.locator('.premium-modal:visible > div:nth-child(2) > div:nth-child(2) > div').filter({ hasText: 'កន្លែងលាងដៃ' }).first().click();
  await page.getByRole('button', { name: 'រក្សាទុក' }).click();
  await page.getByRole('combobox').first().selectOption('1');
  await page.getByRole('combobox').nth(1).selectOption('1');
  await page.getByRole('listitem').filter({ hasText: /CS13/ }).first().getByPlaceholder('ចំណុចខ្លាំង').click();
  await page.getByRole('listitem').filter({ hasText: /CS13/ }).first().getByPlaceholder('ចំណុចខ្លាំង').fill('ម៉ោងពេលបំពេញការងារ');
  await page.getByRole('listitem').filter({ hasText: /CS13/ }).first().getByPlaceholder('ចំណុចខ្សោយ').click();
  await page.getByRole('listitem').filter({ hasText: /CS13/ }).first().getByPlaceholder('ចំណុចខ្សោយ').fill('ម៉ោងពេលបំពេញការងារ');
  await page.getByRole('listitem').filter({ hasText: /CS13/ }).first().getByPlaceholder('មតិយោបល់').click();
  await page.getByRole('listitem').filter({ hasText: /CS13/ }).first().getByPlaceholder('មតិយោបល់').fill('ម៉ោងពេលបំពេញការងារ');
  await page.getByText('ស្វែងរក ឬបញ្ចូល').nth(1).click();
  await page.getByRole('textbox', { name: 'ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី' }).click();
  await page.getByRole('textbox', { name: 'ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី' }).fill('ម៉ោងពេលបំពេញការងារ');
  await page.locator('.premium-modal:visible > div:nth-child(2) > div:nth-child(2) > div').filter({ hasText: 'ម៉ោងពេលបំពេញការងារ' }).first().click();
  await page.getByRole('button', { name: 'រក្សាទុក' }).click();
  await page.getByRole('combobox').nth(2).selectOption('2');
  await page.getByRole('combobox').nth(3).selectOption('3');
  await page.getByRole('listitem').filter({ hasText: /CS05/ }).first().getByPlaceholder('ចំណុចខ្លាំង').click();
  await page.getByRole('listitem').filter({ hasText: /CS05/ }).first().getByPlaceholder('ចំណុចខ្លាំង').fill('ឡដុតសម្រាម');
  await page.getByRole('listitem').filter({ hasText: /CS05/ }).first().getByPlaceholder('ចំណុចខ្សោយ').click();
  await page.getByRole('listitem').filter({ hasText: /CS05/ }).first().getByPlaceholder('ចំណុចខ្សោយ').fill('ឡដុតសម្រាម');
  await page.getByRole('listitem').filter({ hasText: /CS05/ }).first().getByPlaceholder('មតិយោបល់').click();
  await page.getByRole('listitem').filter({ hasText: /CS05/ }).first().getByPlaceholder('មតិយោបល់').fill('ឡដុតសម្រាម');
  await page.getByText('ស្វែងរក ឬបញ្ចូល').nth(2).click();
  await page.locator('li:nth-child(3) > .fi-fo-repeater-item-content > .fi-sc > .fi-grid-col.lg\\:fi-grid-col-span > .fi-sc-component > .form-row > .premium-modal > div:nth-child(2) > .search-container').click();
  await page.getByRole('textbox', { name: 'ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី' }).fill('ឡដុតសម្រាម');
  await page.locator('.premium-modal:visible > div:nth-child(2) > div:nth-child(2) > div').filter({ hasText: 'ឡដុតសម្រាម' }).first().click();
  await page.getByRole('button', { name: 'រក្សាទុក' }).click();
  await page.getByRole('combobox').nth(4).selectOption('3');
  await page.getByRole('combobox').nth(5).selectOption('7');
  await page.getByRole('listitem').filter({ hasText: /CS08/ }).first().getByPlaceholder('ចំណុចខ្លាំង').click();
  await page.getByRole('listitem').filter({ hasText: /CS08/ }).first().getByPlaceholder('ចំណុចខ្លាំង').fill('សួនច្បារ');
  await page.getByRole('listitem').filter({ hasText: /CS08/ }).first().getByPlaceholder('ចំណុចខ្សោយ').click();
  await page.getByRole('listitem').filter({ hasText: /CS08/ }).first().getByPlaceholder('ចំណុចខ្សោយ').fill('សួនច្បារ');
  await page.getByRole('listitem').filter({ hasText: /CS08/ }).first().getByPlaceholder('មតិយោបល់').click();
  await page.getByRole('listitem').filter({ hasText: /CS08/ }).first().getByPlaceholder('មតិយោបល់').fill('សួបច្បារ');
  await page.getByText('ស្វែងរក ឬបញ្ចូល').nth(3).click();
  await page.getByRole('textbox', { name: 'ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី' }).click();
  await page.getByRole('textbox', { name: 'ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី' }).fill('សួនច្បារ');
  await page.locator('.premium-modal:visible > div:nth-child(2) > div:nth-child(2) > div').filter({ hasText: 'សួនច្បារ' }).first().click();
  await page.getByRole('button', { name: 'រក្សាទុក' }).click();
  await page.locator('li:nth-child(4) > .fi-fo-repeater-item-content > .fi-sc > .fi-grid-col.lg\\:fi-grid-col-span > .fi-sc-component > .form-row > div:nth-child(7) > div:nth-child(2) > .items-wrap > .item-row > .dropdown-wrap > .dropdown-select').selectOption('2');
  await page.locator('li:nth-child(4) > .fi-fo-repeater-item-content > .fi-sc > .fi-grid-col.lg\\:fi-grid-col-span > .fi-sc-component > .form-row > div:nth-child(7) > div:nth-child(3) > .items-wrap > .item-row > .dropdown-wrap > .dropdown-select').selectOption('4');
  await page.getByRole('button', { name: 'បញ្ចប់' }).click();
  await page.getByRole('button', { name: 'យល់ព្រម' }).click();
  
});
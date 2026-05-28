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
  // await page.getByRole('button', { name: 'បង្កើតទម្រង់ដាក់ពិន្ទុ' }).first().click();
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
  await page.getByRole('button', { name: 'បង្កើតទម្រង់ដាក់ពិន្ទុ' }).nth(1).click();
  await page.getByRole('button', { name: 'បណ្ណដាក់ពិន្ទុ ក្រុមជនងាយរងគ្រោះ' }).click();
  await page.getByRole('dialog').getByRole('link', { name: 'បណ្ណដាក់ពិន្ទុ ក្រុមជនងាយរងគ្រោះ' }).click();
  const groupDialog = page.getByRole('dialog');
  await groupDialog
    .getByRole('textbox', { name: 'ឈ្មោះក្រុម (ឧទាហរណ៍៖ ក្រុមទី១...)' })
    .fill('group 6');

  const nextInDialog = groupDialog.getByRole('button', { name: 'បន្ទាប់' });
  await expect(nextInDialog).toBeEnabled();
  await nextInDialog.click();


  const dateTextbox = page.getByRole('textbox', { name: 'កាលបរិច្ឆេទដាក់ពិន្ទុ*' });
  await expect(dateTextbox).toBeVisible({ timeout: 30000 });
  await dateTextbox.click();
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
  const addIndicatorRow = async (indicator: RegExp, brainstorm: string, score: string) => {
    await page.getByRole('button', { name: 'បន្ថែមជួរថ្មី' }).click();
    await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
    await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: indicator }).first().click();
    const currentRow = page.locator('.fi-fo-repeater-item-content').last();
    await currentRow.getByRole('textbox', { name: 'Brainstorm text' }).fill(brainstorm);
    await currentRow.getByRole('spinbutton').first().fill(score);
  };

  await addIndicatorRow(/^PS39\b/, 'កន្លែងលាងដៃ', '5');
  await addIndicatorRow(/^PS45\b/, 'ការបង្រៀន', '4');
  await addIndicatorRow(/^PS17\b/, 'ធុងសម្រាម', '3');
  await addIndicatorRow(/^PS06\b/, 'សៀវភៅសិក្សាគោល', '2');
  await addIndicatorRow(/^PS02\b/, 'អនាម័យ និងបរិស្ថាន', '1');
  await page.getByRole('button', { name: 'បន្ទាប់' }).click();
  await page.getByRole('button', { name: 'បន្ទាប់' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'ដំណើរការដាក់ពិន្ទុ' }).click();
  const page1 = await page1Promise;
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
  await page1.getByRole('link', { name: 'បន្ថែមការដាក់ពិន្ទុ' }).click();
  await page1.locator('label').nth(1).click();
  await page1.locator('div:nth-child(3) > .grid > div:nth-child(3) > .rating-label').click();
  await page1.locator('div:nth-child(4) > .grid > div:nth-child(4) > .rating-label').click();
  await page1.locator('div:nth-child(5) > .grid > div:nth-child(3) > .rating-label').click();
  await page1.locator('div:nth-child(6) > .grid > div:nth-child(2) > .rating-label').click();
  await page1.locator('form div').filter({ hasText: 'បញ្ជូន' }).click();
  await page1.getByRole('button', { name: 'បញ្ឈប់ការដាក់ពិន្ទុ' }).click();
  await page1.getByRole('link', { name: 'យល់ព្រម' }).click();
  await page.getByRole('button', { name: 'បាទ/ចាស' }).click();
  await page.getByRole('listitem').filter({ hasText: 'ជ្រើសរើសចម្លើយស្ដង់ដារ បញ្ចូលថ្មី៖ "" បោះបង់ រក្សាទុក PS39 - កន្លែងលាងដៃ 3' }).getByPlaceholder('ចំណុចខ្លាំង').click();
  await page.getByRole('listitem').filter({ hasText: 'ជ្រើសរើសចម្លើយស្ដង់ដារ បញ្ចូលថ្មី៖ "" បោះបង់ រក្សាទុក PS39 - កន្លែងលាងដៃ 3' }).getByPlaceholder('ចំណុចខ្លាំង').fill('កន្លែងលាងដៃ');
  await page.getByRole('listitem').filter({ hasText: 'ជ្រើសរើសចម្លើយស្ដង់ដារ បញ្ចូលថ្មី៖ "" បោះបង់ រក្សាទុក PS39 - កន្លែងលាងដៃ 3' }).getByPlaceholder('ចំណុចខ្សោយ').click();
  await page.getByRole('listitem').filter({ hasText: 'ជ្រើសរើសចម្លើយស្ដង់ដារ បញ្ចូលថ្មី៖ "" បោះបង់ រក្សាទុក PS39 - កន្លែងលាងដៃ 3' }).getByPlaceholder('ចំណុចខ្សោយ').fill('កន្លែងលាងដៃ');
  await page.getByRole('listitem').filter({ hasText: 'ជ្រើសរើសចម្លើយស្ដង់ដារ បញ្ចូលថ្មី៖ "" បោះបង់ រក្សាទុក PS39 - កន្លែងលាងដៃ 3' }).getByPlaceholder('មតិយោបល់').click();
  await page.getByRole('listitem').filter({ hasText: 'ជ្រើសរើសចម្លើយស្ដង់ដារ បញ្ចូលថ្មី៖ "" បោះបង់ រក្សាទុក PS39 - កន្លែងលាងដៃ 3' }).getByPlaceholder('មតិយោបល់').fill('កន្លែងលាងដៃ');
  await page.getByText('ស្វែងរក ឬបញ្ចូល').first().click();
  await page.locator('.search-container').first().click();
  await page.getByRole('textbox', { name: 'ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី' }).fill('ក');
  await page.getByRole('dialog').getByText('PS39 - កន្លែងលាងដៃ').click();
  await page.getByRole('button', { name: 'រក្សាទុក' }).click();
  await page.getByRole('combobox').first().selectOption('1');
  await page.getByRole('combobox').nth(1).selectOption('1');
  await page.getByRole('listitem').filter({ hasText: 'ជ្រើសរើសចម្លើយស្ដង់ដារ បញ្ចូលថ្មី៖ "" បោះបង់ រក្សាទុក PS45 - ការបង្រៀន 3' }).getByPlaceholder('ចំណុចខ្លាំង').click();
  await page.getByRole('listitem').filter({ hasText: 'ជ្រើសរើសចម្លើយស្ដង់ដារ បញ្ចូលថ្មី៖ "" បោះបង់ រក្សាទុក PS45 - ការបង្រៀន 3' }).getByPlaceholder('ចំណុចខ្លាំង').fill('ការបង្រៀន');
  await page.getByRole('listitem').filter({ hasText: 'ជ្រើសរើសចម្លើយស្ដង់ដារ បញ្ចូលថ្មី៖ "" បោះបង់ រក្សាទុក PS45 - ការបង្រៀន 3' }).getByPlaceholder('ចំណុចខ្សោយ').click();
  await page.getByRole('listitem').filter({ hasText: 'ជ្រើសរើសចម្លើយស្ដង់ដារ បញ្ចូលថ្មី៖ "" បោះបង់ រក្សាទុក PS45 - ការបង្រៀន 3' }).getByPlaceholder('ចំណុចខ្សោយ').fill('ការបង្រៀន');
  await page.getByRole('listitem').filter({ hasText: 'ជ្រើសរើសចម្លើយស្ដង់ដារ បញ្ចូលថ្មី៖ "" បោះបង់ រក្សាទុក PS45 - ការបង្រៀន 3' }).getByPlaceholder('មតិយោបល់').click();
  await page.getByRole('listitem').filter({ hasText: 'ជ្រើសរើសចម្លើយស្ដង់ដារ បញ្ចូលថ្មី៖ "" បោះបង់ រក្សាទុក PS45 - ការបង្រៀន 3' }).getByPlaceholder('មតិយោបល់').fill('ការបង្រៀន');
  await page.getByText('ស្វែងរក ឬបញ្ចូល').nth(1).click();
  await page.locator('li:nth-child(2) > .fi-fo-repeater-item-content > .fi-sc > .fi-grid-col.lg\\:fi-grid-col-span > .fi-sc-component > .form-row > .premium-modal > div:nth-child(2) > .search-container').click();
  await page.getByRole('textbox', { name: 'ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី' }).fill('ការបង្រៀន');
  await page.locator('.premium-modal:visible > div:nth-child(2) > div:nth-child(2) > div').filter({ hasText: 'ការបង្រៀន' }).first().click();
  await page.getByRole('button', { name: 'រក្សាទុក' }).click();
  await page.getByRole('combobox').nth(2).selectOption('1');
  await page.getByRole('combobox').nth(3).selectOption('3');
  await page.getByRole('listitem').filter({ hasText: 'ជ្រើសរើសចម្លើយស្ដង់ដារ បញ្ចូលថ្មី៖ "" បោះបង់ រក្សាទុក PS17 - ធុងសម្រាម 3' }).getByPlaceholder('ចំណុចខ្លាំង').click();
  await page.getByRole('listitem').filter({ hasText: 'ជ្រើសរើសចម្លើយស្ដង់ដារ បញ្ចូលថ្មី៖ "" បោះបង់ រក្សាទុក PS17 - ធុងសម្រាម 3' }).getByPlaceholder('ចំណុចខ្លាំង').fill('ធុងសម្រាម');
  await page.getByRole('listitem').filter({ hasText: 'ជ្រើសរើសចម្លើយស្ដង់ដារ បញ្ចូលថ្មី៖ "" បោះបង់ រក្សាទុក PS17 - ធុងសម្រាម 3' }).getByPlaceholder('ចំណុចខ្សោយ').click();
  await page.getByRole('listitem').filter({ hasText: 'ជ្រើសរើសចម្លើយស្ដង់ដារ បញ្ចូលថ្មី៖ "" បោះបង់ រក្សាទុក PS17 - ធុងសម្រាម 3' }).getByPlaceholder('ចំណុចខ្សោយ').fill('ធុងសម្រាម');
  await page.getByRole('listitem').filter({ hasText: 'ជ្រើសរើសចម្លើយស្ដង់ដារ បញ្ចូលថ្មី៖ "" បោះបង់ រក្សាទុក PS17 - ធុងសម្រាម 3' }).getByPlaceholder('មតិយោបល់').click();
  await page.getByRole('listitem').filter({ hasText: 'ជ្រើសរើសចម្លើយស្ដង់ដារ បញ្ចូលថ្មី៖ "" បោះបង់ រក្សាទុក PS17 - ធុងសម្រាម 3' }).getByPlaceholder('មតិយោបល់').fill('ធុងសម្រាម');
  await page.getByText('ស្វែងរក ឬបញ្ចូល').nth(2).click();
  await page.getByRole('textbox', { name: 'ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី' }).click();
  await page.getByRole('textbox', { name: 'ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី' }).fill('ធុងសម្រាម');
  await page.locator('.premium-modal:visible > div:nth-child(2) > div:nth-child(2) > div').filter({ hasText: 'ធុងសម្រាម' }).first().click();
  await page.getByRole('button', { name: 'រក្សាទុក' }).click();
  const ps17Row = page.getByRole('listitem').filter({ hasText: /PS17/ }).first();
  await ps17Row.getByRole('combobox').first().selectOption('1');
  await ps17Row.getByRole('combobox').nth(1).selectOption('4');

  const ps06Row = page.getByRole('listitem').filter({ hasText: /PS06/ }).first();
  await ps06Row.getByPlaceholder('ចំណុចខ្លាំង').fill('សៀវភៅសិក្សាគោល');
  await ps06Row.getByPlaceholder('ចំណុចខ្សោយ').fill('សៀវភៅសិក្សាគោល');
  await ps06Row.getByPlaceholder('មតិយោបល់').fill('សៀវភៅសិក្សាគោល');
  await page.getByText('ស្វែងរក ឬបញ្ចូល').nth(3).click();
  await page.getByRole('textbox', { name: 'ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី' }).click();
  await page.getByRole('textbox', { name: 'ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី' }).fill('សៀវភៅសិក្សាគោល');
  await page.locator('.premium-modal:visible > div:nth-child(2) > div:nth-child(2) > div').filter({ hasText: 'សៀវភៅសិក្សាគោល' }).first().click();
  await page.getByRole('button', { name: 'រក្សាទុក' }).click();
  await ps06Row.getByRole('combobox').first().selectOption('1');
  await ps06Row.getByRole('combobox').nth(1).selectOption('2');

  const ps02Row = page.getByRole('listitem').filter({ hasText: /PS02/ }).first();
  await ps02Row.getByPlaceholder('ចំណុចខ្លាំង').fill('អនាម័យ និងបរិស្ថាន');
  await ps02Row.getByPlaceholder('ចំណុចខ្សោយ').fill('អនាម័យ និងបរិស្ថាន');
  await ps02Row.getByPlaceholder('មតិយោបល់').fill('អនាម័យ និងបរិស្ថាន');
  await page.getByText('ស្វែងរក ឬបញ្ចូល').nth(4).click();
  await page.getByRole('textbox', { name: 'ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី' }).click();
  await page.getByRole('textbox', { name: 'ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី' }).fill('អនាម័យ និងបរិស្ថាន');
  await page.locator('.premium-modal:visible > div:nth-child(2) > div:nth-child(2) > div').filter({ hasText: 'អនាម័យ និងបរិស្ថាន' }).first().click();
  await page.getByRole('button', { name: 'រក្សាទុក' }).click();
  await ps02Row.getByRole('combobox').first().selectOption('1');
  await ps02Row.getByRole('combobox').nth(1).selectOption('2');
  await page.getByRole('button', { name: 'បញ្ចប់' }).click();
  await page.getByRole('button', { name: 'យល់ព្រម' }).click();
});
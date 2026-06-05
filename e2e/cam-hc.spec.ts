import { test, expect } from '@playwright/test';

//pass

test('test', async ({ page }) => {
  test.setTimeout(3 * 60 * 1000);
  await page.goto('https://sads.finztrust.com/admin/login');

  await page.getByRole('textbox', { name: 'ឈ្មោះអ្នកប្រើប្រាស់*' }).fill('admin');
  await page.getByRole('textbox', { name: 'ពាក្យសម្ងាត់*' }).fill('password123');
  await page.getByRole('button', { name: 'ចូលក្នុងប្រព័ន្ធ' }).click();

  //Sevice provider
  // await page.getByRole('link', { name: 'ការពិនិត្យវាយតម្លៃអំពីលទ្ធផលការងារ' }).click();
  // await page.getByRole('button', { name: 'បង្កើតទម្រង់ដាក់ពិន្ទុ' }).first().click();
  // await page.getByRole('table').getByRole('link', { name: 'បណ្ណដាក់ពិន្ទុ អ្នកផ្តល់សេវា' }).click();

  //Citizen
  await page.getByRole('link', { name: 'ការពិនិត្យវាយតម្លៃអំពីលទ្ធផលការងារ' }).click();
  await page.getByRole('button', { name: 'បង្កើតទម្រង់ដាក់ពិន្ទុ' }).first().click();
  await page.getByRole('button', { name: 'បណ្ណដាក់ពិន្ទុ ប្រជាពលរដ្ឋ' }).click();
  await page.getByRole('dialog').getByRole('link', { name: 'បណ្ណដាក់ពិន្ទុ ប្រជាពលរដ្ឋ' }).click();
  const groupDialog = page.getByRole('dialog');
  await groupDialog
    .getByRole('textbox', { name: 'ឈ្មោះក្រុម (ឧទាហរណ៍៖ ក្រុមទី១...)' })
    .fill('group 2');

  const nextInDialog = groupDialog.getByRole('button', { name: 'បន្ទាប់' });
  await expect(nextInDialog).toBeEnabled();
  await nextInDialog.click();

  //Vulnerable group
  // await page.getByRole('link', { name: 'ការពិនិត្យវាយតម្លៃអំពីលទ្ធផលការងារ' }).click();
  // await page.getByRole('button', { name: 'បង្កើតទម្រង់ដាក់ពិន្ទុ' }).first().click();
  // await page.getByRole('button', { name: 'បណ្ណដាក់ពិន្ទុ ក្រុមជនងាយរងគ្រោះ' }).click();
  // await page.getByRole('dialog').getByRole('link', { name: 'បណ្ណដាក់ពិន្ទុ ក្រុមជនងាយរងគ្រោះ' }).click();
  // const groupDialog = page.getByRole('dialog');
  // await groupDialog
  //   .getByRole('textbox', { name: 'ឈ្មោះក្រុម (ឧទាហរណ៍៖ ក្រុមទី១...)' })
  //   .fill('group 4');

  // const nextInDialog = groupDialog.getByRole('button', { name: 'បន្ទាប់' });
  // await expect(nextInDialog).toBeEnabled();
  // await nextInDialog.click();

  const dateTextbox = page.getByRole('textbox', { name: 'កាលបរិច្ឆេទដាក់ពិន្ទុ*' });
  await expect(dateTextbox).toBeVisible({ timeout: 30000 });
  await dateTextbox.click();
  const day2 = page.locator('[role="option"]:visible').filter({ hasText: /^(5|៥)$/ }).first();
  await expect(day2).toBeVisible();
  await day2.click();
  await page.keyboard.press('Escape');
  await page.getByRole('spinbutton', { name: 'ចំនួនអ្នកចូលរួម*' }).fill('30');
  await page.getByRole('spinbutton', { name: 'យុវជន*' }).fill('5');
  await page.getByRole('spinbutton', { name: 'ស្រ្តី*' }).fill('5');
  await page.getByRole('spinbutton', { name: 'ចាស់ជរា*' }).fill('5');
  await page.getByRole('spinbutton', { name: 'កុមារា*' }).fill('5');
  await page.getByRole('spinbutton', { name: 'កុមារី*' }).fill('5');
  await page.getByRole('spinbutton', { name: 'ជនជាតិភាគតិច*' }).fill('5');
  await page.getByRole('spinbutton', { name: 'ជនជាតិដើមភាគតិច*' }).fill('5');
  await page.getByRole('spinbutton', { name: 'គ្រួសារក្រីក្រ*' }).fill('5');
  await page.getByRole('spinbutton', { name: 'ជនពិការ*' }).fill('5');
  await page.getByRole('button', { name: 'បន្ទាប់' }).click();
  await page.getByRole('button', { name: 'បន្ថែមថ្មី' }).click();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).click();
  await page.getByRole('option', { name: 'HC40 ឯកសណ្ថាន' }).click();
  await page.locator('li:nth-child(1)').getByRole('spinbutton').last().fill('5');
  await page.getByRole('button', { name: 'បន្ថែមថ្មី' }).click();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
  await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: /^HC05\b/ }).first().click();
  await page.locator('li:nth-child(2)').getByRole('spinbutton').last().fill('4');
  await page.getByRole('button', { name: 'បន្ថែមថ្មី' }).click();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
  await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: /^HC06\b/ }).first().click();
  await page.locator('li:nth-child(3)').getByRole('spinbutton').last().fill('3');
  await page.getByRole('button', { name: 'បន្ថែមថ្មី' }).click();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
  await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: /^HC38\b/ }).first().click();
  await page.locator('li:nth-child(4)').getByRole('spinbutton').last().fill('2');
  await page.getByRole('button', { name: 'បន្ថែមថ្មី' }).click();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
  await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: /^HC37\b/ }).first().click();
  await page.locator('li:nth-child(5)').getByRole('spinbutton').last().fill('1');
  await page.getByRole('button', { name: 'បន្ទាប់' }).click();
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
  await page1.locator('div:nth-child(4) > .grid > div:nth-child(4) > .rating-label').click();
  await page1.locator('div:nth-child(5) > .grid > div:nth-child(3) > .rating-label').click();
  await page1.locator('div:nth-child(6) > .grid > div:nth-child(4) > .rating-label').click();
  await page1.getByRole('button', { name: 'បញ្ជូន' }).click();
  await page1.getByRole('link', { name: 'បន្ថែមការដាក់ពិន្ទុ' }).click();
  await page1.locator('label').first().click();
  await page1.locator('div:nth-child(3) > .grid > div:nth-child(2) > .rating-label').click();
  await page1.locator('div:nth-child(4) > .grid > div:nth-child(3) > .rating-label').click();
  await page1.locator('div:nth-child(5) > .grid > div:nth-child(4) > .rating-label').click();
  await page1.locator('div:nth-child(6) > .grid > div:nth-child(5) > .rating-label').click();
  await page1.locator('form div').filter({ hasText: 'បញ្ជូន' }).click();
  await page1.getByRole('button', { name: 'បញ្ឈប់ការដាក់ពិន្ទុ' }).click();
  await page1.getByRole('link', { name: 'យល់ព្រម' }).click();
  await page.getByRole('button', { name: 'បន្ទាប់' }).click();
  await page.getByRole('button', { name: 'បាទ/ចាស' }).click();
  const clickVisibleSaveInModal = async () => {
    const saveButton = page.locator('.premium-modal:visible').getByRole('button', { name: 'រក្សាទុក' });
    await expect(saveButton).toBeVisible();
    await saveButton.click();
    await expect(page.locator('.premium-modal:visible')).toHaveCount(0);
  };

  const searchAndSaveInModal = async (text: string) => {
    const modalSearchInput = page
      .locator('.premium-modal:visible')
      .getByRole('textbox', { name: /ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី/ });
    await modalSearchInput.fill(text);

    const option = page
      .locator('.premium-modal:visible > div:nth-child(2) > div:nth-child(2) > div')
      .filter({ hasText: text })
      .first();
    await option.click();

    await clickVisibleSaveInModal();
  };

  const fillStep5Row = async (
    code: RegExp,
    fields: { strong: string; weak: string; comment: string },
    proposedBy: string,
    targetGroup: string
  ) => {
    const row = page.getByRole('listitem').filter({ hasText: code }).first();
    await row.getByPlaceholder('ចំណុចខ្លាំង').fill(fields.strong);
    await row.getByPlaceholder('ចំណុចខ្សោយ').fill(fields.weak);
    await row.getByPlaceholder('មតិយោបល់').fill(fields.comment);
    await row.getByText('ស្វែងរក ឬបញ្ចូល...').first().click();
    await searchAndSaveInModal(fields.strong);
    await row.getByRole('combobox').first().selectOption(proposedBy);
    await row.getByRole('combobox').nth(1).selectOption(targetGroup);
  };

  await fillStep5Row(/HC40/, { strong: 'បុគ្គលិក និងគ្រូពេទ្យទាំងអស់មានឯកសណ្ឋានការងារត្រឹមត្រូ', weak: 'ចំនួនឯកសណ្ឋានដែលបានផ្តល់ជូននៅមានកម្រិត', comment: 'ចង់ឱ្យមានការផ្គត់ផ្គង់កញ្ចប់ឯកសណ្ឋានថ្មីដែលមានគុណភាពល្អបន្ថែម' }, '1', '1');
  await fillStep5Row(/HC05/, { strong: 'មានទីតាំងឡដុតសម្រាមដាច់ដោយឡែកពីអគារពិនិត្យជំងឺ ដែលជួយកាត់បន្ថយការបំពុល និងការចម្លងរោគពីកាកសំណល់វេជ្ជសាស្ត្រ', weak: 'ឡដុតសម្រាមបច្ចុប្បន្នមានសភាពចាស់ទ្រុឌទ្រោម ផ្សែងហុយខ្លាំងប៉ះពាល់ដល់បរិស្ថានជុំវិញ និងខ្វះប្រព័ន្ធចម្រោះផ្សែងពុលមុនភាយចេញក្រៅ', comment: 'ចង់ឱ្យមានការសាងសង់ ឬជួសជុលកែលម្អ្បបច្ចេកទេសឡដុតសម្រាមឱ្យស្របតាមស្តង់ដារបច្ចេកទេសបៃតង និងមានរបងព័ទ្ធជុំវិញសុវត្ថិភាព' }, '5', '6');
  await fillStep5Row(/HC06/, { strong: 'មានក្រុមគ្រូពេទ្យប្រចាំការត្រៀមលក្ខណៈរង់ចាំទទួលករណីសង្គ្រោះបន្ទាន់បានទាន់ពេលវេលា និងមានបន្ទប់សង្គ្រោះដាច់ដោយឡែក', weak: 'ង្វះឧបករណ៍គាំទ្រជីវិតកម្រិតខ្ពស់ (ដូចជា ម៉ាស៊ីនជំនួយដង្ហើម ឬម៉ាស៊ីនតាមដានចលនាបេះដូង) និងខ្វះថ្នាំសង្គ្រោះបន្ទាន់មួយចំនួននៅពេលយប់', comment: 'ចង់ឱ្យមានការបំពាក់ឧបករណ៍ និងសម្ភារៈវេជ្ជសាស្ត្រក្នុងបន្ទប់សង្គ្រោះបន្ទាន់ឱ្យបានគ្រប់គ្រាន់ស្តង់ដារ និងមានការបណ្តុះបណ្តាលជំនាញសង្គ្រោះកម្រិតខ្ពស់បន្ថែម' }, '5', '7');
  await fillStep5Row(/HC38/, { strong: 'មានផ្ទៃដីធំទូលាយសម្រាប់រៀបចំជាចំណតយានយន្តជូនប្រជាពលរដ្ឋ និងបុគ្គលិកដែលមកទទួលសេវា', weak: 'មិនទាន់មានដំបូលសម្រាប់ការពារកម្តៅថ្ងៃនិងទឹកភ្លៀង ខ្វះខ្សែរបាំងបែងចែកគំនូសចតឱ្យមានសណ្តាប់ធ្នាប់ និងខ្វះប្រព័ន្ធសន្តិសុខមើលការខុសត្រូវ (ហានិភ័យបាត់បង់)', comment: 'ចង់ឱ្យមានការសាងសង់រោងចតយានយន្តដែលមានដំបូលត្រឹមត្រូវ មានគូសខ្សែចតច្បាស់លាស់ និងមានកាមេរ៉ាសុវត្ថិភាព ឬអ្នកយាមប្រចាំការ' }, '5', '2');
  await fillStep5Row(/HC37/, { strong: 'ទីតាំងរង់ចាំស្ថិតនៅចំកណ្តាល មានខ្យល់អាកាសចេញចូលល្អ និងមានកៅអីវែងៗសម្រាប់ឱ្យអ្នកជំងឺអង្គុយរង់ចាំ', weak: 'ចំនួនកៅអីអង្គុយនៅមានកម្រិតមិនទាន់សមាមាត្រនឹងចំនួនអ្នកជំងឺមកច្រើនក្នុងម៉ោងមមាញឹក ខ្វះកង្ហារបក់កម្តៅ និងគ្មានធុងទឹកស្អាតសម្រាប់បរិភោគឥតគិតថ្លៃ', comment: 'ចង់ឱ្យមានការបន្ថែមចំនួនកៅអីរង់ចាំឱ្យបានច្រើន បំពាក់កង្ហារជញ្ជាំងបន្ថែម និងដាក់ធុងទឹកចម្រោះសម្រាប់ឱ្យអ្នកជំងឺអាចដងពិសារកំឡុងពេលរង់ចាំ' }, '1', '2');
  await page.getByRole('button', { name: 'បញ្ចប់' }).click();
  await page.getByRole('button', { name: 'យល់ព្រម' }).click();
});
import { test, expect } from '@playwright/test';

//pass

test('test', async ({ page }) => {
  test.setTimeout(3 * 60 * 1000);
  await page.goto('https://sads.finztrust.com/admin/login');

  await page.getByRole('textbox', { name: 'ឈ្មោះអ្នកប្រើប្រាស់*' }).fill('cafbl');
  await page.getByRole('textbox', { name: 'ពាក្យសម្ងាត់*' }).fill('cafbl123');
  await page.getByRole('button', { name: 'ចូលក្នុងប្រព័ន្ធ' }).click();

  //Service provider
  // await page.getByRole('link', { name: 'ការពិនិត្យវាយតម្លៃអំពីលទ្ធផលការងារ' }).click();
  // await page.getByRole('button', { name: 'គ្រប់គ្រងបណ្ណដាក់ពិន្ទុ' }).first().click();
  // await page.getByRole('table').getByRole('link', { name: 'បណ្ណដាក់ពិន្ទុ អ្នកផ្តល់សេវា' }).click();

  //Citizen
  await page.getByRole('link', { name: 'ការពិនិត្យវាយតម្លៃអំពីលទ្ធផលការងារ' }).click();
  await page.getByRole('button', { name: 'គ្រប់គ្រងបណ្ណដាក់ពិន្ទុ' }).first().click();
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
  // await page.getByRole('button', { name: 'គ្រប់គ្រងបណ្ណដាក់ពិន្ទុ' }).first().click();
  // await page.getByRole('button', { name: 'បណ្ណដាក់ពិន្ទុ ក្រុមជនងាយរងគ្រោះ' }).click();
  // await page.getByRole('dialog').getByRole('link', { name: 'បណ្ណដាក់ពិន្ទុ ក្រុមជនងាយរងគ្រោះ' }).click();
  // const groupDialog = page.getByRole('dialog');
  // await groupDialog
  //   .getByRole('textbox', { name: 'ឈ្មោះក្រុម (ឧទាហរណ៍៖ ក្រុមទី១...)' })
  //   .fill('group 1');
  // const nextInDialog = groupDialog.getByRole('button', { name: 'បន្ទាប់' });
  // await expect(nextInDialog).toBeEnabled();
  // await nextInDialog.click();

  const dateTextbox = page.getByRole('textbox', { name: 'កាលបរិច្ឆេទដាក់ពិន្ទុ*' });
  await expect(dateTextbox).toBeVisible({ timeout: 30000 });
  await dateTextbox.click();
  const day2 = page.locator('[role="option"]:visible').filter({ hasText: /^(10|១០)$/ }).first();
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
  await page.getByRole('option', { name: 'CS48 កន្លែងលាងដៃ' }).click();
  await page.locator('li:nth-child(1)').getByRole('spinbutton').last().fill('5');
  await page.getByRole('button', { name: 'បន្ថែមថ្មី' }).click();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
  await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: /^CS13\b/ }).first().click();
  await page.locator('li:nth-child(2)').getByRole('spinbutton').last().fill('4');
  await page.getByRole('button', { name: 'បន្ថែមថ្មី' }).click();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
  await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: /^CS05\b/ }).first().click();
  await page.locator('li:nth-child(3)').getByRole('spinbutton').last().fill('3');
  await page.getByRole('button', { name: 'បន្ថែមថ្មី' }).click();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
  await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: /^CS08\b/ }).first().click();
  await page.locator('li:nth-child(4)').getByRole('spinbutton').last().fill('2');
  await page.getByRole('button', { name: 'បន្ថែមថ្មី' }).click();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
  await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: /^CS09\b/ }).first().click();
  await page.locator('li:nth-child(5)').getByRole('spinbutton').last().fill('1');
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

  const agreeOnPopup = page1
    .locator('.swal2-confirm')
    .or(page1.getByRole('button', { name: 'យល់ព្រម' }))
    .or(page1.getByRole('link', { name: 'យល់ព្រម' }));
  await expect(agreeOnPopup.first()).toBeVisible({ timeout: 15000 });
  await agreeOnPopup.first().click();

  await expect(page.getByText('សូមស្កេនទីនេះដើម្បីផ្តល់មតិយោបល់')).toBeVisible({ timeout: 30000 });
  const qrStepNext = page.locator('form').getByRole('button', { name: 'បន្ទាប់', exact: true }).last();
  await qrStepNext.scrollIntoViewIfNeeded();
  await expect(qrStepNext).toBeEnabled();
  await qrStepNext.click();

  const yesButton = page.getByRole('button', { name: 'បាទ/ចាស' });
  if (await yesButton.isVisible()) {
    await yesButton.click();
  }

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
    fields: { strong: string; weak: string; comment: string; action: string },
    proposedBy: string,
    targetGroup: string
  ) => {
    const row = page.getByRole('listitem').filter({ hasText: code }).first();
    await expect(row).toBeVisible({ timeout: 15000 });
    await row.getByPlaceholder('ចំណុចខ្លាំង').fill(fields.strong);
    await row.getByPlaceholder('ចំណុចខ្សោយ').fill(fields.weak);
    await row.getByPlaceholder('មតិយោបល់').fill(fields.comment);
    // One search field per row — for proposed action (សកម្មភាពដែលស្នើឡើង)
    await row.getByText('ស្វែងរក ឬបញ្ចូល...').first().click();
    await searchAndSaveInModal(fields.action);
    const proposedBySelect = row.getByRole('combobox').first();
    const targetGroupSelect = row.getByRole('combobox').nth(1);
    await proposedBySelect.scrollIntoViewIfNeeded();
    await proposedBySelect.selectOption(proposedBy);
    await targetGroupSelect.selectOption(targetGroup);
  };

  await fillStep5Row(
    /CS48/,
    {
      strong: 'មានកន្លែងលាងដៃស្អាត និងមានសាប៊ូអនាម័យគ្រប់គ្រាន់សម្រាប់សិស្សានុសិស្សប្រើប្រាស់',
      weak: 'ខ្វះប្រភពទឹកស្អាតជាប្រចាំ និងកន្លែងលាងដៃមិនទាន់គ្រប់ជ្រុងជ្រោយតាមចំនួនសិស្ស',
      comment: 'ចង់ឱ្យមានការតម្លើងកន្លែងលាងដៃបន្ថែមឱ្យបានគ្រប់គ្រាន់ និងធានាការផ្គត់ផ្គង់ទឹក',
      action: 'ស្នើសុំកញ្ចប់ថវិកាសាងសង់កន្លែងលាងដៃបន្ថែម និងតភ្ជាប់ប្រព័ន្ធចម្រោះទឹកស្អាត',
    },
    '1',
    '1'
  );

  await fillStep5Row(
    /CS13/,
    {
      strong: 'លោកគ្រូអ្នកគ្រូ និងបុគ្គលិកគោរពម៉ោងពេលបំពេញការងារ និងមកបង្រៀនបានទៀងទាត់',
      weak: 'ការគ្រប់គ្រង និងកត់ត្រាវត្តមានម៉ោងការងាររបស់បុគ្គលិកមួយចំនួននៅមានភាពធូររលុង',
      comment: 'ចង់ឱ្យមានប្រព័ន្ធគ្រប់គ្រង និងតាមដានម៉ោងពេលបំពេញការងារឱ្យបានច្បាស់លាស់ និងតឹងរ៉ឹង',
      action: 'រៀបចំតម្លើងម៉ាស៊ីនស្កេនមេដៃ (Fingerprint) ឬស្កេន QR Code ដើម្បីពង្រឹងការគ្រប់គ្រងវត្តមាន',
    },
    '5',
    '2'
  );

  await fillStep5Row(
    /CS05/,
    {
      strong: 'មានទីតាំងឡដុតសម្រាមដាច់ដោយឡែក ដែលជួយសម្រួលដល់ការកំទេចកាកសំណល់បានលឿន',
      weak: 'ឡដុតសម្រាមបច្ចុប្បន្នមានសភាពចាស់ទ្រុឌទ្រោម ហុយផ្សែងខ្លាំងប៉ះពាល់ដល់បរិស្ថានជុំវិញ',
      comment: 'ចង់ឱ្យមានការជួសជុល ឬសាងសង់ឡដុតសម្រាមថ្មីដែលមានប្រព័ន្ធចម្រោះផ្សែងត្រឹមត្រូវ',
      action: 'ស្នើជួសជុលកែលម្អ្បបច្ចេកទេសឡដុតសម្រាមឱ្យស្របតាមស្តង់ដារបៃតង និងមានរបងព័ទ្ធជុំវិញសុវត្ថិភាព',
    },
    '5',
    '3'
  );

  await fillStep5Row(
    /CS08/,
    {
      strong: 'មានផ្ទៃដីធំទូលាយសម្រាប់រៀបចំជាសួនច្បារ បង្កើនសោភ័ណភាព និងភាពបៃតងក្នុងសាលា',
      weak: 'ខ្វះការថែទាំជាប្រចាំ គ្មានស្មៅបៃតង និងខ្វះប្រព័ន្ធទឹកស្រោចស្រពនៅរដូវប្រាំង',
      comment: 'ចង់ឱ្យមានការកែលម្អសួនច្បារឱ្យមានភាពស្រស់ស្អាត មានផ្កា និងដើមឈើលម្អត្រឹមត្រូវ',
      action: 'រៀបចំយុទ្ធនាការដាំកូនឈើ និងផ្កាលម្អបន្ថែម ព្រមទាំងដាក់ពង្រាយប្រព័ន្ធទុយោស្រោចទឹក',
    },
    '1',
    '4'
  );

  await fillStep5Row(
    /CS09/,
    {
      strong: 'មានការបំពាក់តុ កៅអី និងក្តារខៀននៅក្នុងថ្នាក់រៀនសម្រាប់ដំណើរការបង្រៀន',
      weak: 'សម្ភារៈបរិក្ខារ និងសង្ហារិមមួយចំនួនធំមានសភាពចាស់ បាក់បែក អតុល្យភាពនឹងចំនួនសិស្ស',
      comment: 'ចង់ឱ្យមានការផ្លាស់ប្តូរ និងផ្គត់ផ្គង់សង្ហារិម ក៏ដូចជាសម្ភារៈបន្ទប់រៀនថ្មីៗដែលមានគុណភាព',
      action: 'ស្នើសុំថវិកាទិញទូដាក់ឯកសារ តុ កៅអីសិស្សបន្ថែម និងជួសជុលគ្រឿងសង្ហារិមដែលខូចខាត',
    },
    '5',
    '5'
  );

  await page.getByRole('button', { name: 'បញ្ចប់' }).click();
  const finalAgree = page
    .locator('.swal2-confirm')
    .or(page.getByRole('button', { name: 'យល់ព្រម' }))
    .or(page.getByRole('link', { name: 'យល់ព្រម' }));
  await expect(finalAgree.first()).toBeVisible({ timeout: 15000 });
  await finalAgree.first().click();
});

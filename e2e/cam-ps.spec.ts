import { test, expect } from '@playwright/test';

//pass

test('test', async ({ page }) => {
  test.setTimeout(3 * 60 * 1000);
  await page.goto('https://sads.finztrust.com/admin/login');

  await page.getByRole('textbox', { name: 'ឈ្មោះអ្នកប្រើប្រាស់*' }).fill('admin');
  await page.getByRole('textbox', { name: 'ពាក្យសម្ងាត់*' }).fill('password123');
  await page.getByRole('button', { name: 'ចូលក្នុងប្រព័ន្ធ' }).click();

  //Service provider
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
  //   .fill('group 4');
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
  await page.getByRole('option', { name: 'PS39 កន្លែងលាងដៃ' }).click();
  await page.locator('li:nth-child(1)').getByRole('spinbutton').last().fill('5');
  await page.getByRole('button', { name: 'បន្ថែមថ្មី' }).click();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
  await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: /^PS50\b/ }).first().click();
  await page.locator('li:nth-child(2)').getByRole('spinbutton').last().fill('4');
  await page.getByRole('button', { name: 'បន្ថែមថ្មី' }).click();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
  await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: /^PS17\b/ }).first().click();
  await page.locator('li:nth-child(3)').getByRole('spinbutton').last().fill('3');
  await page.getByRole('button', { name: 'បន្ថែមថ្មី' }).click();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
  await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: /^PS33\b/ }).first().click();
  await page.locator('li:nth-child(4)').getByRole('spinbutton').last().fill('2');
  await page.getByRole('button', { name: 'បន្ថែមថ្មី' }).click();
  await page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
  await page.locator('[id^="fi-select-input-option-"]:visible').filter({ hasText: /^PS19\b/ }).first().click();
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

  await fillStep5Row(
    /PS39/,
    {
      strong: 'មានកន្លែងលាងដៃស្អាត និងមានសាប៊ូអនាម័យគ្រប់គ្រាន់',
      weak: 'ខ្វះទឹកស្អាតជាបរិច្ឆេទ និងកន្លែងលាងដៃមិនទាន់គ្រប់ជ្រុងជ្រោះ',
      comment: 'ចង់ឱ្យមានកន្លែងលាងដៃបន្ថែមឱ្យបានគ្រប់គ្រាន់',
    },
    '1',
    '1'
  );
  await fillStep5Row(
    /PS50/,
    {
      strong: 'មានការតាមដានការសិក្សាយ៉ាងទៀងទាត់ និងរក្សាទិន្នន័យបានល្អ',
      weak: 'ការតាមដានមិនទាន់បានធ្វើជាប្រចាំ និងខ្វះឧបករណ៍គាំទ្រក្នុងការកត់ត្រា',
      comment: 'ចង់ឱ្យមានប្រព័ន្ធតាមដានការសិក្សាឱ្យបានទៀងទាត់បន្ថែម',
    },
    '5',
    '2'
  );
  await fillStep5Row(
    /PS17/,
    {
      strong: 'មានធុងសម្រាមគ្រប់គ្រាន់ និងដាក់ទីតាំងសមរម្យ',
      weak: 'ធុងសម្រាមមួយចំនួនពេញ ឬខូច និងខ្វះការប្រមូលផ្តិតជាប្រចាំ',
      comment: 'ចង់ឱ្យមានធុងសម្រាមបន្ថែម និងការប្រមូលផ្តិតទៀងទាត់',
    },
    '5',
    '3'
  );
  await fillStep5Row(
    /PS33/,
    {
      strong: 'មានសេវាកម្មគ្រប់គ្រាន់ និងបុគ្គលិកដឹកនាំល្អ',
      weak: 'សេវាកម្មមួយចំនួននៅមានកម្រិត និងខ្វះការតាមដានជាប្រចាំ',
      comment: 'ចង់ឱ្យមានការកែលម្អសេវាកម្មឱ្យបានល្អបន្ថែម',
    },
    '1',
    '4'
  );
  await fillStep5Row(
    /PS19/,
    {
      strong: 'មានបរិស្ថានស្អាត និងអនាម័យល្អ',
      weak: 'ខ្វះការថែទាំបរិស្ថានជុំវិញឱ្យបានទៀងទាត់',
      comment: 'ចង់ឱ្យមានការថែទាំបរិស្ថាន និងអនាម័យឱ្យបានល្អបន្ថែម',
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

import { expect, Page } from '@playwright/test';
import {
  CriteriaRow,
  SCORECARD_LABELS,
  ScorecardNavigation,
  Step5Row,
} from './types';

export class ScorecardFormPage {
  constructor(protected readonly page: Page) {}

  /** Opens one of the 3 scorecard groups — same steps after this. */
  async openScorecard({
    group,
    groupName,
    manageButtonIndex = 0,
    fromEvaluationList = false,
  }: ScorecardNavigation) {
    const label = SCORECARD_LABELS[group];

    await this.page.getByRole('link', { name: 'ការពិនិត្យវាយតម្លៃអំពីលទ្ធផលការងារ' }).click();

    const manageButton = this.page.getByRole('button', { name: 'គ្រប់គ្រងបណ្ណដាក់ពិន្ទុ' });
    if (fromEvaluationList) {
      await expect(manageButton.first()).toBeVisible({ timeout: 15000 });
      await manageButton.first().click();
    } else {
      await manageButton.nth(manageButtonIndex).click();
    }

    if (group === 'serviceProvider') {
      await this.page.getByRole('table').getByRole('link', { name: label }).click();
      return;
    }

    await this.page.getByRole('button', { name: label }).click();
    await this.page.getByRole('dialog').getByRole('link', { name: label }).click();

    if (groupName) {
      await this.fillGroupDialog(groupName);
    }
  }

  async openCitizenScorecard(groupName: string, manageButtonIndex = 1) {
    await this.openScorecard({ group: 'citizen', groupName, manageButtonIndex });
  }

  private async fillGroupDialog(groupName: string) {
    const groupDialog = this.page.getByRole('dialog');
    await groupDialog
      .getByRole('textbox', { name: 'ឈ្មោះក្រុម (ឧទាហរណ៍៖ ក្រុមទី១...)' })
      .fill(groupName);

    const nextInDialog = groupDialog.getByRole('button', { name: 'បន្ទាប់' });
    await expect(nextInDialog).toBeEnabled();
    await nextInDialog.click();
  }

  protected async runScorecardFlow(options: {
    navigation: ScorecardNavigation;
    criteriaRows: CriteriaRow[];
    step5Rows: Step5Row[];
    useActionField?: boolean;
    runScoring: (popup: Page) => Promise<void>;
  }) {
    await this.openScorecard(options.navigation);
    await this.fillStep1ParticipantInfo();
    await this.clickNext();
    await this.fillCriteriaRows(options.criteriaRows);
    await this.proceedToScoringLink();

    const popup = await this.openScoringPopup();
    await options.runScoring(popup);
    await this.agreeOnScoringPopup(popup);
    await this.confirmScoringAndGoToStep5();
    await this.fillAllStep5Rows(options.step5Rows, options.useActionField);
    await this.finishForm();
  }

  async fillStep1ParticipantInfo(day = '6') {
    await this.page.getByRole('textbox', { name: 'កាលបរិច្ឆេទដាក់ពិន្ទុ*' }).click();
    await this.page.getByRole('option', { name: day, exact: true }).click();
    await this.page.keyboard.press('Escape');
    await this.page.getByRole('spinbutton', { name: 'ចំនួនអ្នកចូលរួមសរុប*' }).fill('30');
    await this.page.getByRole('spinbutton', { name: 'យុវជន*' }).fill('5');
    await this.page.getByRole('spinbutton', { name: 'ស្រ្តី*' }).fill('5');
    await this.page.getByRole('spinbutton', { name: 'ចាស់ជរា*' }).fill('5');
    await this.page.getByRole('spinbutton', { name: 'កុមារា*' }).fill('5');
    await this.page.getByRole('spinbutton', { name: 'កុមារី*' }).fill('5');
    await this.page.getByRole('spinbutton', { name: 'ជនជាតិភាគតិច*' }).fill('5');
    await this.page.getByRole('spinbutton', { name: 'ជនជាតិដើមភាគតិច*' }).fill('5');
    await this.page.getByRole('spinbutton', { name: 'គ្រួសារក្រីក្រ*' }).fill('5');
    await this.page.getByRole('spinbutton', { name: 'ជនមានពិការភាព*' }).fill('5');
  }

  async clickNext() {
    await this.page.getByRole('button', { name: 'បន្ទាប់' }).click();
  }

  async fillCriteriaRows(rows: CriteriaRow[]) {
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const rowNum = i + 1;

      if (i === 0) {
        await this.page.getByRole('button', { name: 'បន្ថែមថ្មី' }).click();
        await this.page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).click();
        await this.selectCriteriaOption(row);
      } else if (i === 1) {
        await this.page.getByRole('button', { name: 'បន្ថែមថ្មី' }).click();
        await this.page.getByRole('button', { name: 'បន្ថែមថ្មី' }).click();
        await this.page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
        await this.selectCriteriaOption(row);
      } else if (i === 2) {
        await this.page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
        await this.selectCriteriaOption(row);
      } else {
        if (i === 3) {
          await this.page.getByRole('button', { name: 'បន្ថែមថ្មី' }).click();
          await this.page.getByRole('button', { name: 'បន្ថែមថ្មី' }).click();
        }
        await this.page.getByRole('button', { name: 'ជ្រើសរើសលក្ខណៈវិនិច្ឆ័យ', exact: true }).last().click();
        await this.selectCriteriaOption(row);
      }

      await this.page.locator(`li:nth-child(${rowNum})`).getByRole('spinbutton').last().fill(row.score);
    }
  }

  private async selectCriteriaOption(row: CriteriaRow) {
    if (row.optionName) {
      await this.page.getByRole('option', { name: row.optionName }).click();
      return;
    }

    const pattern = row.optionPattern!;
    const fiOption = this.page
      .locator('[id^="fi-select-input-option-"]:visible')
      .filter({ hasText: pattern })
      .first();

    if (await fiOption.isVisible({ timeout: 3000 }).catch(() => false)) {
      await fiOption.click();
      return;
    }

    await this.page.getByRole('option').filter({ hasText: pattern }).first().click();
  }

  async proceedToScoringLink() {
    await this.clickNext();
    await this.clickNext();
  }

  async openScoringPopup(): Promise<Page> {
    const popupPromise = this.page.waitForEvent('popup');
    await this.page.getByRole('link', { name: 'ដំណើរការដាក់ពិន្ទុ' }).click();
    return popupPromise;
  }

  async agreeOnScoringPopup(popup: Page) {
    const agreeOnPopup = popup
      .locator('.swal2-confirm')
      .or(popup.getByRole('button', { name: 'យល់ព្រម' }))
      .or(popup.getByRole('link', { name: 'យល់ព្រម' }));
    await expect(agreeOnPopup.first()).toBeVisible({ timeout: 15000 });
    await agreeOnPopup.first().click();
    await this.page.bringToFront();
  }

  async confirmScoringAndGoToStep5() {
    const footerNext = () =>
      this.page.locator('form').getByRole('button', { name: 'បន្ទាប់', exact: true }).last();

    await expect(footerNext()).toBeEnabled({ timeout: 15000 });
    await footerNext().scrollIntoViewIfNeeded();
    await footerNext().click();

    const confirmFinish = this.page
      .locator('.swal2-confirm')
      .or(this.page.getByRole('button', { name: 'បាទ/ចាស' }));
    await expect(confirmFinish.first()).toBeVisible({ timeout: 15000 });
    await confirmFinish.first().click();

    await expect(this.page.getByPlaceholder('ចំណុចខ្លាំង').first()).toBeVisible({ timeout: 30000 });
  }

  private step5ActionSearch(index: number) {
    return this.page.locator('form').getByText('ស្វែងរក ឬបញ្ចូល...').nth(index);
  }

  private async clickVisibleSaveInModal() {
    const saveButton = this.page.locator('.premium-modal:visible').getByRole('button', { name: 'រក្សាទុក' });
    await expect(saveButton).toBeVisible({ timeout: 15000 });
    await saveButton.click();
    await expect(this.page.locator('.premium-modal:visible')).toHaveCount(0);
  }

  async searchAndSaveInModal(text: string) {
    const modalSearchInput = this.page
      .locator('.premium-modal:visible')
      .getByRole('textbox', { name: /ស្វែងរក ឬបញ្ចូលចម្លើយថ្មី/ });
    await expect(modalSearchInput).toBeVisible({ timeout: 15000 });
    await modalSearchInput.fill(text);

    const option = this.page
      .locator('.premium-modal:visible > div:nth-child(2) > div:nth-child(2) > div')
      .filter({ hasText: text })
      .first();
    if (await option.isVisible({ timeout: 3000 }).catch(() => false)) {
      await option.click();
    }

    await this.clickVisibleSaveInModal();
  }

  async fillStep5Row(index: number, row: Step5Row, modalText?: string) {
    const { fields, proposedBy, targetGroup } = row;
    const searchText = modalText ?? fields.action ?? fields.strong;

    const strong = this.page.locator('textarea[x-ref="strengthInput"]').nth(index);
    await strong.scrollIntoViewIfNeeded();
    await strong.fill(fields.strong);
    await this.page.getByPlaceholder('ចំណុចខ្សោយ').nth(index).fill(fields.weak);
    await this.page.getByPlaceholder('មតិយោបល់').nth(index).fill(fields.comment);

    const actionSearch = this.step5ActionSearch(index);
    await actionSearch.scrollIntoViewIfNeeded();
    await expect(actionSearch).toBeVisible({ timeout: 15000 });
    await actionSearch.click();
    await this.searchAndSaveInModal(searchText);

    await this.page.getByRole('combobox').nth(index * 2).selectOption(proposedBy);
    await this.page.getByRole('combobox').nth(index * 2 + 1).selectOption(targetGroup);
  }

  async fillAllStep5Rows(rows: Step5Row[], useActionField = false) {
    for (let i = 0; i < rows.length; i++) {
      const modalText = useActionField ? rows[i].fields.action : undefined;
      await this.fillStep5Row(i, rows[i], modalText);
    }
  }

  async finishForm() {
    await this.page.getByRole('button', { name: 'បញ្ចប់' }).click();
    const finalAgree = this.page
      .locator('.swal2-confirm')
      .or(this.page.getByRole('button', { name: 'យល់ព្រម' }))
      .or(this.page.getByRole('link', { name: 'យល់ព្រម' }));
    await expect(finalAgree.first()).toBeVisible({ timeout: 15000 });
    await finalAgree.first().click();
  }
}

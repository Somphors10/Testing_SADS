import { Page } from '@playwright/test';
import { ScorecardFormPage } from './ScorecardFormPage';
import { CriteriaRow, Step5Row } from './types';

export class CamPsPage extends ScorecardFormPage {
  static readonly criteriaRows: CriteriaRow[] = [
    { optionPattern: /^PS39\b/, score: '5' },
    { optionPattern: /^PS50\b/, score: '4' },
    { optionPattern: /^PS17\b/, score: '3' },
    { optionPattern: /^PS33\b/, score: '2' },
    { optionPattern: /^PS19\b/, score: '1' },
  ];

  static readonly step5Rows: Step5Row[] = [
    {
      fields: {
        strong: 'មានកន្លែងលាងដៃស្អាត និងមានសាប៊ូអនាម័យគ្រប់គ្រាន់',
        weak: 'ខ្វះទឹកស្អាតជាបរិច្ឆេទ និងកន្លែងលាងដៃមិនទាន់គ្រប់ជ្រុងជ្រោះ',
        comment: 'ចង់ឱ្យមានកន្លែងលាងដៃបន្ថែមឱ្យបានគ្រប់គ្រាន់',
      },
      proposedBy: '1',
      targetGroup: '1',
    },
    {
      fields: {
        strong: 'មានការតាមដានការសិក្សាយ៉ាងទៀងទាត់ និងរក្សាទិន្នន័យបានល្អ',
        weak: 'ការតាមដានមិនទាន់បានធ្វើជាប្រចាំ និងខ្វះឧបករណ៍គាំទ្រក្នុងការកត់ត្រា',
        comment: 'ចង់ឱ្យមានប្រព័ន្ធតាមដានការសិក្សាឱ្យបានទៀងទាត់បន្ថែម',
      },
      proposedBy: '5',
      targetGroup: '2',
    },
    {
      fields: {
        strong: 'មានធុងសម្រាមគ្រប់គ្រាន់ និងដាក់ទីតាំងសមរម្យ',
        weak: 'ធុងសម្រាមមួយចំនួនពេញ ឬខូច និងខ្វះការប្រមូលផ្តិតជាប្រចាំ',
        comment: 'ចង់ឱ្យមានធុងសម្រាមបន្ថែម និងការប្រមូលផ្តិតទៀងទាត់',
      },
      proposedBy: '5',
      targetGroup: '3',
    },
    {
      fields: {
        strong: 'មានសេវាកម្មគ្រប់គ្រាន់ និងបុគ្គលិកដឹកនាំល្អ',
        weak: 'សេវាកម្មមួយចំនួននៅមានកម្រិត និងខ្វះការតាមដានជាប្រចាំ',
        comment: 'ចង់ឱ្យមានការកែលម្អសេវាកម្មឱ្យបានល្អបន្ថែម',
      },
      proposedBy: '1',
      targetGroup: '4',
    },
    {
      fields: {
        strong: 'មានបរិស្ថានស្អាត និងអនាម័យល្អ',
        weak: 'ខ្វះការថែទាំបរិស្ថានជុំវិញឱ្យបានទៀងទាត់',
        comment: 'ចង់ឱ្យមានការថែទាំបរិស្ថាន និងអនាម័យឱ្យបានល្អបន្ថែម',
      },
      proposedBy: '5',
      targetGroup: '5',
    },
  ];

  constructor(page: Page) {
    super(page);
  }

  async runScoring(popup: Page) {
    await popup.locator('label').nth(2).click();
    await popup.locator('div:nth-child(3) > .grid > div:nth-child(2) > .rating-label').click();
    await popup.locator('div:nth-child(4) > .grid > div:nth-child(3) > .rating-label').click();
    await popup.locator('div:nth-child(5) > .grid > div:nth-child(2) > .rating-label').click();
    await popup.locator('div:nth-child(6) > .grid > div:nth-child(3) > .rating-label').click();
    await popup.locator('form div').filter({ hasText: 'បញ្ជូន' }).click();
    await popup.getByRole('link', { name: 'បន្ថែមការដាក់ពិន្ទុ' }).click();
    await popup.locator('label').nth(3).click();
    await popup.locator('div:nth-child(3) > .grid > div:nth-child(3) > .rating-label').click();
    await popup.locator('div:nth-child(4) > .grid > div:nth-child(4) > .rating-label').click();
    await popup.locator('div:nth-child(5) > .grid > div:nth-child(3) > .rating-label').click();
    await popup.locator('div:nth-child(6) > .grid > div:nth-child(4) > .rating-label').click();
    await popup.getByRole('button', { name: 'បញ្ជូន' }).click();
    await popup.getByRole('link', { name: 'បន្ថែមការដាក់ពិន្ទុ' }).click();
    await popup.locator('label').first().click();
    await popup.locator('div:nth-child(3) > .grid > div:nth-child(2) > .rating-label').click();
    await popup.locator('div:nth-child(4) > .grid > div:nth-child(3) > .rating-label').click();
    await popup.locator('div:nth-child(5) > .grid > div:nth-child(4) > .rating-label').click();
    await popup.locator('div:nth-child(6) > .grid > div:nth-child(5) > .rating-label').click();
    await popup.locator('form div').filter({ hasText: 'បញ្ជូន' }).click();
    await popup.getByRole('button', { name: 'បញ្ឈប់ការដាក់ពិន្ទុ' }).click();
  }

  async runFullFlow() {
    await this.openCitizenScorecard('group 5', 1);
    await this.fillStep1ParticipantInfo();
    await this.clickNext();
    await this.fillCriteriaRows(CamPsPage.criteriaRows);
    await this.proceedToScoringLink();

    const popup = await this.openScoringPopup();
    await this.runScoring(popup);
    await this.agreeOnScoringPopup(popup);
    await this.confirmScoringAndGoToStep5();
    await this.fillAllStep5Rows(CamPsPage.step5Rows);
    await this.finishForm();
  }
}

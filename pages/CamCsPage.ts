import { Page } from '@playwright/test';
import { ScorecardFormPage } from './ScorecardFormPage';
import { CriteriaRow, Step5Row } from './types';

export class CamCsPage extends ScorecardFormPage {
  static readonly criteriaRows: CriteriaRow[] = [
    { optionPattern: /^CS48\b/, score: '5' },
    { optionPattern: /^CS13\b/, score: '4' },
    { optionPattern: /^CS15\b/, score: '3' },
    { optionPattern: /^CS38\b/, score: '2' },
    { optionPattern: /^CS35\b/, score: '1' },
  ];

  static readonly step5Rows: Step5Row[] = [
    {
      fields: {
        strong: 'មានកន្លែងលាងដៃស្អាត និងមានសាប៊ូអនាម័យគ្រប់គ្រាន់សម្រាប់សិស្សានុសិស្សប្រើប្រាស់',
        weak: 'ខ្វះប្រភពទឹកស្អាតជាប្រចាំ និងកន្លែងលាងដៃមិនទាន់គ្រប់ជ្រុងជ្រោះតាមចំនួនសិស្ស',
        comment: 'ចង់ឱ្យមានការតម្លើងកន្លែងលាងដៃបន្ថែមឱ្យបានគ្រប់គ្រាន់ និងធានាការផ្គត់ផ្គង់ទឹក',
        action: 'ស្នើសុំកញ្ចប់ថវិកាសាងសង់កន្លែងលាងដៃបន្ថែម និងតភ្ជាប់ប្រព័ន្ធចម្រោះទឹកស្អាត',
      },
      proposedBy: '1',
      targetGroup: '1',
    },
    {
      fields: {
        strong: 'លោកគ្រូអ្នកគ្រូ និងបុគ្គលិកគោរពម៉ោងពេលបំពេញការងារ និងមកបង្រៀនបានទៀងទាត់',
        weak: 'ការគ្រប់គ្រង និងកត់ត្រាវត្តមានម៉ោងការងាររបស់បុគ្គលិកមួយចំនួននៅមានភាពធូររលុង',
        comment: 'ចង់ឱ្យមានប្រព័ន្ធគ្រប់គ្រង និងតាមដានម៉ោងពេលបំពេញការងារឱ្យបានច្បាស់លាស់ និងតឹងរ៉ឹង',
        action: 'រៀបចំតម្លើងម៉ាស៊ីនស្កេនមេដៃ (Fingerprint) ឬស្កេន QR Code ដើម្បីពង្រឹងការគ្រប់គ្រងវត្តមាន',
      },
      proposedBy: '5',
      targetGroup: '2',
    },
    {
      fields: {
        strong: 'មានទីតាំងឡដុតសម្រាមដាច់ដោយឡែក ដែលជួយសម្រួលដល់ការកំទេចកាកសំណល់បានលឿន',
        weak: 'ឡដុតសម្រាមបច្ចុប្បន្នមានសភាពចាស់ទ្រុឌទ្រោម ហុយផ្សែងខ្លាំងប៉ះពាល់ដល់បរិស្ថានជុំវិញ',
        comment: 'ចង់ឱ្យមានការជួសជុល ឬសាងសង់ឡដុតសម្រាមថ្មីដែលមានប្រព័ន្ធចម្រោះផ្សែងត្រឹមត្រូវ',
        action: 'ស្នើជួសជុលកែលម្អ្បបច្ចេកទេសឡដុតសម្រាមឱ្យស្របតាមស្តង់ដារបៃតង និងមានរបងព័ទ្ធជុំវិញសុវត្ថិភាព',
      },
      proposedBy: '5',
      targetGroup: '3',
    },
    {
      fields: {
        strong: 'មានផ្ទៃដីធំទូលាយសម្រាប់រៀបចំជាសួនច្បារ បង្កើនសោភ័ណភាព និងភាពបៃតងក្នុងសាលា',
        weak: 'ខ្វះការថែទាំជាប្រចាំ គ្មានស្មៅបៃតង និងខ្វះប្រព័ន្ធទឹកស្រោចស្រពនៅរដូវប្រាំង',
        comment: 'ចង់ឱ្យមានការកែលម្អសួនច្បារឱ្យមានភាពស្រស់ស្អាត មានផ្កា និងដើមឈើលម្អត្រឹមត្រូវ',
        action: 'រៀបចំយុទ្ធនាការដាំកូនឈើ និងផ្កាលម្អបន្ថែម ព្រមទាំងដាក់ពង្រាយប្រព័ន្ធទុយោស្រោចទឹក',
      },
      proposedBy: '1',
      targetGroup: '4',
    },
    {
      fields: {
        strong: 'មានការបំពាក់តុ កៅអី និងក្តារខៀននៅក្នុងថ្នាក់រៀនសម្រាប់ដំណើរការបង្រៀន',
        weak: 'សម្ភារៈបរិក្ខារ និងសង្ហារិមមួយចំនួនធំមានសភាពចាស់ បាក់បែក អតុល្យភាពនឹងចំនួនសិស្ស',
        comment: 'ចង់ឱ្យមានការផ្លាស់ប្តូរ និងផ្គត់ផ្គង់សង្ហារិម ក៏ដូចជាសម្ភារៈបន្ទប់រៀនថ្មីៗដែលមានគុណភាព',
        action: 'ស្នើសុំថវិកាទិញទូដាក់ឯកសារ តុ កៅអីសិស្សបន្ថែម និងជួសជុលគ្រឿងសង្ហារិមដែលខូចខាត',
      },
      proposedBy: '5',
      targetGroup: '5',
    },
  ];

  constructor(page: Page) {
    super(page);
  }

  async runScoring(popup: Page) {
    await popup.locator('label').nth(1).click();
    await popup.locator('div:nth-child(3) > .grid > div:nth-child(3) > .rating-label').click();
    await popup.locator('div:nth-child(4) > .grid > div:nth-child(4) > .rating-label').click();
    await popup.locator('div:nth-child(5) > .grid > div:nth-child(3) > .rating-label').click();
    await popup.locator('div:nth-child(6) > .grid > div:nth-child(2) > .rating-label').click();
    await popup.getByRole('button', { name: 'បញ្ជូន' }).click();
    await popup.getByRole('link', { name: 'បន្ថែមការដាក់ពិន្ទុ' }).click();
    await popup.locator('label').first().click();
    await popup.locator('div:nth-child(3) > .grid > div:nth-child(2) > .rating-label').click();
    await popup.locator('div:nth-child(4) > .grid > div:nth-child(3) > .rating-label').click();
    await popup.locator('div:nth-child(5) > .grid > div:nth-child(4) > .rating-label').click();
    await popup.locator('div:nth-child(6) > .grid > div:nth-child(5) > .rating-label').click();
    await popup.locator('form div').filter({ hasText: 'បញ្ជូន' }).click();
    await popup.getByRole('link', { name: 'បន្ថែមការដាក់ពិន្ទុ' }).click();
    await popup.locator('label').nth(4).click();
    await popup.locator('div:nth-child(3) > .grid > div:nth-child(4) > .rating-label').click();
    await popup.locator('div:nth-child(4) > .grid > div:nth-child(3) > .rating-label').click();
    await popup.locator('div:nth-child(5) > .grid > div:nth-child(2) > .rating-label').click();
    await popup.locator('div:nth-child(6) > .grid > div > .rating-label').first().click();
    await popup.locator('form div').filter({ hasText: 'បញ្ជូន' }).click();
    await popup.getByRole('button', { name: 'បញ្ឈប់ការដាក់ពិន្ទុ' }).click();
  }

  async runFullFlow() {
    await this.openCitizenScorecard('group 2');
    await this.fillStep1ParticipantInfo();
    await this.clickNext();
    await this.fillCriteriaRows(CamCsPage.criteriaRows);
    await this.proceedToScoringLink();

    const popup = await this.openScoringPopup();
    await this.runScoring(popup);
    await this.agreeOnScoringPopup(popup);
    await this.confirmScoringAndGoToStep5();
    await this.fillAllStep5Rows(CamCsPage.step5Rows, true);
    await this.finishForm();
  }
}

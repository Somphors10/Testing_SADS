import { Page } from '@playwright/test';
import { ScorecardFormPage } from './ScorecardFormPage';
import { CriteriaRow, ScorecardNavigation, Step5Row } from './types';

export class CamHcPage extends ScorecardFormPage {
  static readonly navigation: ScorecardNavigation = {
    group: 'citizen',
    groupName: 'group 1',
    manageButtonIndex: 1,
    fromEvaluationList: true,
  };
  static readonly criteriaRows: CriteriaRow[] = [
    { optionPattern: /^HC40\b/, score: '5' },
    { optionPattern: /^HC05\b/, score: '4' },
    { optionPattern: /^HC06\b/, score: '3' },
    { optionPattern: /^HC38\b/, score: '2' },
    { optionPattern: /^HC37\b/, score: '1' },
  ];

  static readonly step5Rows: Step5Row[] = [
    {
      fields: {
        strong: 'បុគ្គលិក និងគ្រូពេទ្យទាំងអស់មានឯកសណ្ឋានការងារត្រឹមត្រូវ',
        weak: 'ចំនួនឯកសណ្ឋានដែលបានផ្តល់ជូននៅមានកម្រិត',
        comment: 'ចង់ឱ្យមានការផ្គត់ផ្គង់កញ្ចប់ឯកសណ្ឋានថ្មីដែលមានគុណភាពល្អបន្ថែម',
      },
      proposedBy: '1',
      targetGroup: '1',
    },
    {
      fields: {
        strong: 'មានទីតាំងឡដុតសម្រាមដាច់ដោយឡែកពីអគារពិនិត្យជំងឺ ដែលជួយកាត់បន្ថយការបំពុល និងការចម្លងរោគពីកាកសំណល់វេជ្ជសាស្ត្រ',
        weak: 'ឡដុតសម្រាមបច្ចុប្បន្នមានសភាពចាស់ទ្រុឌទ្រោម ផ្សែងហុយខ្លាំងប៉ះពាល់ដល់បរិស្ថានជុំវិញ និងខ្វះប្រព័ន្ធចម្រោះផ្សែងពុលមុនភាយចេញក្រៅ',
        comment: 'ចង់ឱ្យមានការសាងសង់ ឬជួសជុលកែលម្អ្បបច្ចេកទេសឡដុតសម្រាមឱ្យស្របតាមស្តង់ដារបច្ចេកទេសបៃតង និងមានរបងព័ទ្ធជុំវិញសុវត្ថិភាព',
      },
      proposedBy: '5',
      targetGroup: '6',
    },
    {
      fields: {
        strong: 'មានក្រុមគ្រូពេទ្យប្រចាំការត្រៀមលក្ខណៈរង់ចាំទទួលករណីសង្គ្រោះបន្ទាន់បានទាន់ពេលវេលា និងមានបន្ទប់សង្គ្រោះដាច់ដោយឡែក',
        weak: 'ង្វះឧបករណ៍គាំទ្រជីវិតកម្រិតខ្ពស់ (ដូចជា ម៉ាស៊ីនជំនួយដង្ហើម ឬម៉ាស៊ីនតាមដានចលនាបេះដូង) និងខ្វះថ្នាំសង្គ្រោះបន្ទាន់មួយចំនួននៅពេលយប់',
        comment: 'ចង់ឱ្យមានការបំពាក់ឧបករណ៍ និងសម្ភារៈវេជ្ជសាស្ត្រក្នុងបន្ទប់សង្គ្រោះបន្ទាន់ឱ្យបានគ្រប់គ្រាន់ស្តង់ដារ និងមានការបណ្តុះបណ្តាលជំនាញសង្គ្រោះកម្រិតខ្ពស់បន្ថែម',
      },
      proposedBy: '5',
      targetGroup: '7',
    },
    {
      fields: {
        strong: 'មានផ្ទៃដីធំទូលាយសម្រាប់រៀបចំជាចំណតយានយន្តជូនប្រជាពលរដ្ឋ និងបុគ្គលិកដែលមកទទួលសេវា',
        weak: 'មិនទាន់មានដំបូលសម្រាប់ការពារកម្តៅថ្ងៃនិងទឹកភ្លៀង ខ្វះខ្សែរបាំងបែងចែកគំនូសចតឱ្យមានសណ្តាប់ធ្នាប់ និងខ្វះប្រព័ន្ធសន្តិសុខមើលការខុសត្រូវ (ហានិភ័យបាត់បង់)',
        comment: 'ចង់ឱ្យមានការសាងសង់រោងចតយានយន្តដែលមានដំបូលត្រឹមត្រូវ មានគូសខ្សែចតច្បាស់លាស់ និងមានកាមេរ៉ាសុវត្ថិភាព ឬអ្នកយាមប្រចាំការ',
      },
      proposedBy: '5',
      targetGroup: '2',
    },
    {
      fields: {
        strong: 'ទីតាំងរង់ចាំស្ថិតនៅចំកណ្តាល មានខ្យល់អាកាសចេញចូលល្អ និងមានកៅអីវែងៗសម្រាប់ឱ្យអ្នកជំងឺអង្គុយរង់ចាំ',
        weak: 'ចំនួនកៅអីអង្គុយនៅមានកម្រិតមិនទាន់សមាមាត្រនឹងចំនួនអ្នកជំងឺមកច្រើនក្នុងម៉ោងមមាញឹក ខ្វះកង្ហារបក់កម្តៅ និងគ្មានធុងទឹកស្អាតសម្រាប់បរិភោគឥតគិតថ្លៃ',
        comment: 'ចង់ឱ្យមានការបន្ថែមចំនួនកៅអីរង់ចាំឱ្យបានច្រើន បំពាក់កង្ហារជញ្ជាំងបន្ថែម និងដាក់ធុងទឹកចម្រោះសម្រាប់ឱ្យអ្នកជំងឺអាចដងពិសារកំឡុងពេលរង់ចាំ',
      },
      proposedBy: '1',
      targetGroup: '2',
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
    await popup.locator('div:nth-child(3) > .grid > div:nth-child(2) > .rating-label').click();
    await popup.locator('div:nth-child(4) > .grid > div:nth-child(3) > .rating-label').click();
    await popup.locator('div:nth-child(5) > .grid > div:nth-child(4) > .rating-label').click();
    await popup.locator('div:nth-child(6) > .grid > div:nth-child(5) > .rating-label').click();
    await popup.locator('form div').filter({ hasText: 'បញ្ជូន' }).click();
    await popup.getByRole('button', { name: 'បញ្ឈប់ការដាក់ពិន្ទុ' }).click();
  }

  async runFullFlow() {
    await this.runScorecardFlow({
      navigation: CamHcPage.navigation,
      criteriaRows: CamHcPage.criteriaRows,
      step5Rows: CamHcPage.step5Rows,
      runScoring: (popup) => this.runScoring(popup),
    });
  }
}

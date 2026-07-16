export type Step5RowFields = {
  strong: string;
  weak: string;
  comment: string;
  action?: string;
};

export type Step5Row = {
  fields: Step5RowFields;
  proposedBy: string;
  targetGroup: string;
};

export type CriteriaRow = {
  optionName?: string;
  optionPattern?: RegExp;
  score: string;
};

/** Three scorecard types from the "គ្រប់គ្រងបណ្ណដាក់ពិន្ទុ" dropdown — same form flow after entry. */
export type ScorecardGroup = 'serviceProvider' | 'citizen' | 'vulnerable';

export const SCORECARD_LABELS: Record<ScorecardGroup, string> = {
  serviceProvider: 'បណ្ណដាក់ពិន្ទុ អ្នកផ្តល់សេវា',
  citizen: 'បណ្ណដាក់ពិន្ទុ ប្រជាពលរដ្ឋ',
  vulnerable: 'បណ្ណដាក់ពិន្ទុ ក្រុមជនងាយរងគ្រោះ',
};

export type ScorecardNavigation = {
  group: ScorecardGroup;
  groupName?: string;
  /** Index on dashboard cards. Ignored when fromEvaluationList is true. */
  manageButtonIndex?: number;
  /** After opening the evaluation list, click the draft row's manage button (only one on page). */
  fromEvaluationList?: boolean;
};

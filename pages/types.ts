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

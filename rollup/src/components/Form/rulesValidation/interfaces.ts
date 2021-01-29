export interface RuleValidationInterface {
  rule: boolean;
  message: string;
}

export interface RulesValidationInterface {
  [nameFunction: string]: (arg: any) => RuleValidationInterface;
}

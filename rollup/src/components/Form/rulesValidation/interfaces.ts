export interface RuleValidationInterface {
  rule: boolean;
  message: string;
}

export interface RulesValidationInterface {
  [nameFunction: string]: (arg: any) => RuleValidationInterface;
  // lineLengthRules?: ({ string }: { string: string }) => RuleValidationInterface;
  // requiredInputRules?: ({
  //   firstClickByInput,
  // }: {
  //   firstClickByInput: boolean;
  // }) => RuleValidationInterface;
  // emailRules?: ({ string }: { string: string }) => RuleValidationInterface;
  // checkPassword?: ({
  //   password,
  //   repeatPassword,
  // }: {
  //   password: string;
  //   repeatPassword: string;
  // }) => RuleValidationInterface;
}

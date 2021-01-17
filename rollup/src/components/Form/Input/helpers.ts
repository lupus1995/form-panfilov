import FieldsInterface from '../interfaces/FieldsInterface';
import FieldInterface from '../interfaces/FieldInterface';
import {
  RulesValidationInterface,
  RuleValidationInterface,
} from '../rulesValidation/interfaces';

export default function validation({
  value,
  setError,
  setMessage,
  rules,
  fields = {},
}: {
  value: string;
  setError: (error: boolean) => void;
  setMessage: (message: string) => void;
  rules: RulesValidationInterface;
  fields?: FieldsInterface;
}): FieldInterface {
  let rule: RuleValidationInterface | undefined;
  const {
    requiredInputRules,
    emailRules,
    lineLengthRules,
    checkPassword,
  } = rules;
  if (typeof requiredInputRules === 'function') {
    rule = requiredInputRules({
      firstClickByInput: value.length === 0,
    });

    if (rule.rule) {
      setError(rule.rule);
      setMessage(rule.message);
      return {
        value,
        error: rule.rule,
      };
    }
  }

  if (typeof lineLengthRules === 'function') {
    rule = lineLengthRules({ string: value });
    if (rule.rule) {
      setError(rule.rule);
      setMessage(rule.message);
      return {
        value,
        error: rule.rule,
      };
    }
  }

  if (typeof emailRules === 'function') {
    rule = emailRules({ string: value });
    if (rule.rule) {
      setError(rule.rule);
      setMessage(rule.message);
      return {
        value,
        error: rule.rule,
      };
    }
  }

  if (typeof checkPassword === 'function') {
    rule = checkPassword({
      repeatPassword: value,
      password: fields.password.value,
    });
    if (rule.rule) {
      setError(rule.rule);
      setMessage(rule.message);
      return {
        value,
        error: rule.rule,
      };
    }
  }

  setError(false);
  setMessage('');
  return {
    value,
    error: false,
  };
}

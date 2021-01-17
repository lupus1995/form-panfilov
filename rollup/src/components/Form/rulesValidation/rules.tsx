import { RuleValidationInterface } from './interfaces';

export function lineLengthRules({
  string,
}: {
  string: string;
}): RuleValidationInterface {
  return {
    rule: string.length < 2,
    message: 'Длинна строки должна быть от 2 знаков.',
  };
}

export function requiredInputRules({
  firstClickByInput,
}: {
  firstClickByInput: boolean;
}): RuleValidationInterface {
  return {
    rule: firstClickByInput,
    message: 'Поле обязательно.',
  };
}

export function emailRules({
  string,
}: {
  string: string;
}): RuleValidationInterface {
  const expression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gi;
  const regex = new RegExp(expression);
  return {
    rule: !string.match(regex),
    message: 'Не валидный email.',
  };
}

export function checkPassword({
  password,
  repeatPassword,
}: {
  password: string;
  repeatPassword: string;
}): RuleValidationInterface {
  return {
    rule: password !== repeatPassword,
    message: 'Пароли не совпадают.',
  };
}

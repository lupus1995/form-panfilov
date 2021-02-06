import {
  Form,
  FormContext,
  KeyFormInterface,
  FormContextInterface,
} from './src/components/Form/Form';

import MessageErrorForm from './src/components/MessageError/MessageErrorForm';

import FormWrapper from './src/components/Form/FormWrapper';

import validation from './src/components/Form/Input/helpers';

import Input from './src/components/Form/Input/Input';

import Select from './src/components/Form/Select/Select';

import ErrorMessages from './src/components/Form/interfaces/ErrorMessage';
import FieldInterface from './src/components/Form/interfaces/FieldInterface';
import FieldsInterface from './src/components/Form/interfaces/FieldsInterface';
import SelectItemInterface from './src/components/Form/interfaces/SelectItemIntreface';

import {
  RuleValidationInterface,
  RulesValidationInterface,
} from './src/components/Form/rulesValidation/interfaces';

import {
  lineLengthRules,
  requiredInputRules,
  emailRules,
  checkPassword,
} from './src/components/Form/rulesValidation/rules';

export {
  Form,
  FormContext,
  MessageErrorForm,
  KeyFormInterface,
  FormContextInterface,
  FormWrapper,
  validation,
  Input,
  Select,
  ErrorMessages,
  FieldInterface,
  FieldsInterface,
  SelectItemInterface,
  RuleValidationInterface,
  RulesValidationInterface,
  lineLengthRules,
  requiredInputRules,
  emailRules,
  checkPassword,
};

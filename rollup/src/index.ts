import {
  Form,
  FormContext,
  KeyFormInterface,
  FormContextInterface,
} from './components/Form/Form';

import MessageErrorForm from './components/MessageError/MessageErrorForm';

import FormWrapper from './components/Form/FormWrapper';

import validation from './components/Form/Input/helpers';

import Input from './components/Form/Input/Input';

import Select from './components/Form/Select/Select';

import ErrorMessages from './components/Form/interfaces/ErrorMessage';
import FieldInterface from './components/Form/interfaces/FieldInterface';
import FieldsInterface from './components/Form/interfaces/FieldsInterface';
import SelectItemInterface from './components/Form/interfaces/SelectItemIntreface';

import {
  RuleValidationInterface,
  RulesValidationInterface,
} from './components/Form/rulesValidation/interfaces';

import {
  lineLengthRules,
  requiredInputRules,
  emailRules,
  checkPassword,
} from './components/Form/rulesValidation/rules';

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

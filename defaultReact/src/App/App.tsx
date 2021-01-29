import React from 'react';
import classNames from 'classnames';
import './style.scss';
import {
  Form,
  FormWrapper,
  Input,
  KeyFormInterface,
  requiredInputRules,
  emailRules,
  lineLengthRules,
  Select,
  checkPassword,
} from 'form-panfilov';

const defaultValue: KeyFormInterface[] = [
  {
    name: {
      defaultValue: '',
      defaultError: true,
    },
  },
  {
    email: {
      defaultValue: '',
      defaultError: true,
    },
  },
  {
    password: {
      defaultValue: '',
      defaultError: true,
    },
  },
  {
    repeatPassword: {
      defaultValue: '',
      defaultError: true,
    },
  },
  {
    select: {
      defaultValue: '',
      defaultError: false,
    },
  },
];

const options = [
  { value: 'chat', label: 'Чат' },
  { value: 'dialog', label: 'Диалог' },
];

const App = (): JSX.Element => {
  return (
    <Form
      data={defaultValue}
      onSubmit={(fields: any) => {}}
      className={classNames('d-flex flex-direction-column', {
        disabled: false,
      })}
    >
      <FormWrapper errors={[]} form={defaultValue}>
        <Input
          rules={{ requiredInputRules, emailRules }}
          placeholder="Email"
          type="text"
        />
        <Input rules={{ requiredInputRules }} placeholder="Name" type="text" />
        <Input
          rules={{ requiredInputRules, lineLengthRules }}
          placeholder="Password"
          type="password"
        />
        <Input
          rules={{ requiredInputRules, lineLengthRules, checkPassword }}
          placeholder="Repeat password"
          type="password"
        />
        <Select
          // defaultItemSelect={options[0]}
          rules={{ requiredInputRules }}
          name="select"
          options={options}
        />
      </FormWrapper>
    </Form>
  );
};

export default App;

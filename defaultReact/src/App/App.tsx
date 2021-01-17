import React from 'react';
import classNames from 'classnames';
import './style.scss';
import {
  Form,
  FormWrapper,
  ErrorMessages,
  Input,
  KeyFormInterface,
  MessageErrorForm,
  requiredInputRules,
  emailRules,
  lineLengthRules,
  Select,
} from 'form-panfilov';

const defaultValue: KeyFormInterface[] = [
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

const App = () => {
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
        <Input
          rules={{ requiredInputRules, lineLengthRules }}
          placeholder="Password"
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

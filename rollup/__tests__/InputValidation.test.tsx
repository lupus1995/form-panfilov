import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import {
  Form,
  FormWrapper,
  Input,
  KeyFormInterface,
  requiredInputRules,
  lineLengthRules,
  emailRules,
  checkPassword,
} from '../src';

const simpleValue: KeyFormInterface[] = [
  {
    name: {
      defaultValue: '',
      defaultError: true,
    },
  },
];

const emailValue: KeyFormInterface[] = [
  {
    email: {
      defaultValue: '',
      defaultError: true,
    },
  },
];

const passwordValue: KeyFormInterface[] = [
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
];

const SimpleForm = () => {
  return (
    <Form data={simpleValue} onSubmit={(fields: any) => {}}>
      <FormWrapper errors={[]} form={simpleValue}>
        <Input
          rules={{ requiredInputRules, lineLengthRules }}
          placeholder="Name"
          type="text"
        />
      </FormWrapper>
    </Form>
  );
};

const EmailForm = () => {
  return (
    <Form data={emailValue} onSubmit={(fields: any) => {}}>
      <FormWrapper errors={[]} form={emailValue}>
        <Input
          rules={{ requiredInputRules, emailRules }}
          placeholder="Email"
          type="email"
        />
      </FormWrapper>
    </Form>
  );
};

const PasswordForm = () => {
  return (
    <Form data={passwordValue} onSubmit={(fields: any) => {}}>
      <FormWrapper errors={[]} form={passwordValue}>
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
      </FormWrapper>
    </Form>
  );
};

describe('Checked input validation', () => {
  it('check show error message and text after blur event on input', async () => {
    const { getByRole, findByText, getByTestId } = render(<SimpleForm />);
    const input = getByRole('textbox');
    const wrapperInput = getByTestId(/wrapper input/i);
    const errorMessage = findByText(/Поле обязательно/i);
    input.focus();
    userEvent.click(wrapperInput);
    expect(await errorMessage).toBeInTheDocument();
  });

  it('check show error after claer input from text', async () => {
    const { getByRole, findByText, getByTestId } = render(<SimpleForm />);
    const input = getByRole('textbox');
    const wrapperInput = getByTestId(/wrapper input/i);
    const errorMessage = findByText(/Поле обязательно/i);

    const value = '1231232312123123';
    fireEvent.input(input, { target: { value } });
    fireEvent.input(input, { target: { value: '' } });
    userEvent.click(wrapperInput);
    expect(await errorMessage).toBeInTheDocument();
  });

  it('check length validation', async () => {
    const { getByRole, findByText } = render(<SimpleForm />);
    const input = getByRole('textbox');
    const errorMessage = findByText(/Длинна строки должна быть от 2 знаков/i);
    const value = '1';
    fireEvent.input(input, { target: { value } });
    expect(await errorMessage).toBeInTheDocument();
  });

  it('check email', async () => {
    const { getByRole, findByText } = render(<EmailForm />);
    const input = getByRole('textbox');
    const errorMessage = findByText(/Не валидный email/i);
    const value = '1';
    fireEvent.input(input, { target: { value } });
    expect(await errorMessage).toBeInTheDocument();
  });

  it('check repeat password', async () => {
    const { getAllByTestId, findByText } = render(<PasswordForm />);
    const password = getAllByTestId('password')[0];
    const repeatPassword = getAllByTestId('password')[1];
    const errorMessage = findByText(/Пароли не совпадают/i);
    const valuePassword = 'asdfsdjf';
    const valueRepeatPassword = 'asdfsdjf1';
    fireEvent.input(password, { target: { value: valuePassword } });
    fireEvent.input(repeatPassword, { target: { value: valueRepeatPassword } });
    expect(await errorMessage).toBeInTheDocument();
  });
});

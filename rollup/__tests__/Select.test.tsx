import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { FC } from 'react';
import {
  Select,
  requiredInputRules,
  KeyFormInterface,
  Form,
  FormWrapper,
} from '..';

const simpleValue: KeyFormInterface[] = [
  {
    select: {
      defaultValue: '',
      defaultError: true,
    },
  },
];

const options = [
  { value: 'chat', label: 'Чат' },
  { value: 'dialog', label: 'Диалог' },
];

// eslint-disable-next-line react/require-default-props
const SelectTest: FC<{ disabled?: boolean; search?: boolean }> = ({
  disabled = false,
  search = false,
}) => (
  <Form data={simpleValue} onSubmit={(fields: any) => {}}>
    <FormWrapper errors={[]} form={simpleValue}>
      <Select
        // defaultItemSelect={options[0]}
        rules={{ requiredInputRules }}
        name="select"
        options={options}
        isDisabled={disabled}
        isSearchable={search}
      />
    </FormWrapper>
  </Form>
);

describe('Check select', () => {
  it('check wrapper select', () => {
    const { getByTestId } = render(<SelectTest />);
    const wrapper = getByTestId(/select container/i);
    expect(wrapper).toBeInTheDocument();
  });

  it('check input text', () => {
    const value = '1231232312123123';
    const { getByRole } = render(<SelectTest search />);
    const input: any = getByRole('textbox');
    fireEvent.change(input, { target: { value } });
    expect(input.value).toBe(value);
  });

  it('check disabled select', () => {
    const { getByRole } = render(<SelectTest disabled />);
    const input: any = getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('check show item select', async () => {
    const { getByRole, findByText } = render(<SelectTest search />);
    const input = getByRole('textbox');
    const option = findByText(/Диалог/i);

    userEvent.click(input);
    expect(await option).toBeInTheDocument();
  });

  it('filter items by input text', async () => {
    const value = 'Д';
    const { getByRole, findByText } = render(<SelectTest search />);
    const input = getByRole('textbox');
    userEvent.click(input);
    fireEvent.change(input, { target: { value } });
    const option = findByText('Диалог');
    expect(await option).toBeInTheDocument();
  });

  // TODO найти скрытый input c ключом так и не удалось
  it('check click by item select', async () => {
    const value = 'Д';
    const optionVal = 'Диалог';
    const { getByRole, findByText } = render(<SelectTest search />);
    const input: any = getByRole('textbox');
    userEvent.click(input);
    fireEvent.change(input, { target: { value } });
    const option = await findByText(optionVal);
    userEvent.click(option);
    expect(input.value).toBe('');
  });

  it('check validation select', async () => {
    const { findByText, getByText } = render(<SelectTest search />);
    const submitButton = getByText(/Войти в аккаунт/i);
    const errorMessage = findByText(/Поле обязательно/i);

    userEvent.click(submitButton);
    expect(await errorMessage).toBeInTheDocument();
  });
});

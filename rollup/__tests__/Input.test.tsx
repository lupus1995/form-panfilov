import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from '../src/components/Form/Input/Input';
import { requiredInputRules } from '../src/components/Form/rulesValidation/rules';

const getInput = ({
  disabled = false,
  readonly = false,
}: {
  disabled?: boolean;
  readonly?: boolean;
}) => {
  const { getByRole, findByTestId, getByTestId, debug } = render(
    <Input
      type="text"
      placeholder="Search"
      disabled={disabled}
      readonly={readonly}
      rules={{ requiredInputRules }}
    />,
  );
  const input: any = getByRole('textbox');
  const errorMessage = findByTestId(/error message/i);
  const wrapperInput = getByTestId(/wrapper input/i);

  return { input, errorMessage, wrapperInput, debug };
};

describe('Work input component', () => {
  it('check wrapper input', () => {
    const { wrapperInput } = getInput({});
    expect(wrapperInput).toBeInTheDocument();
  });
  it('check render input', () => {
    const { input } = getInput({});
    expect(input).toBeInTheDocument();
  });

  it('check placeholder', () => {
    const placeholder = 'Input placeholder';
    const { input }: { input: HTMLInputElement } = getInput({});
    input.placeholder = placeholder;
    expect(input.placeholder).toBe(placeholder);
  });

  it('check disabled input', () => {
    const { input } = getInput({ disabled: true });
    expect(input).toBeDisabled();
  });

  it('check readonly input', () => {
    const { input } = getInput({ readonly: true });
    expect(input.readOnly).toBe(true);
  });

  it('check value input', () => {
    const value = '1231232312123123';
    const { input }: { input: HTMLInputElement } = getInput({});
    fireEvent.input(input, { target: { value } });
    expect(input.value).toBe(value);
  });
});

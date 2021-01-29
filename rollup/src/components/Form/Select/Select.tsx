import React, { FC, useContext, useEffect, useState } from 'react';
import './style.scss';
import ReactSelect from 'react-select';
import {
  MessageErrorForm,
  RulesValidationInterface,
  validation,
} from '../../..';
import { FormContext } from '../Form';
import SelectItemInterface from '../interfaces/SelectItemIntreface';

const Select: FC<{
  name: string;
  isDisabled?: boolean;
  isSearchable?: boolean;
  options: SelectItemInterface[];
  rules: RulesValidationInterface;
  defaultItemSelect?: SelectItemInterface | null;
}> = ({
  name,
  isDisabled = false,
  isSearchable = false,
  options,
  rules,
  defaultItemSelect = null,
}) => {
  const { setFields, submit, fields } = useContext(FormContext);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [
    selectedOption,
    setSelectedOption,
  ] = useState<SelectItemInterface | null>(defaultItemSelect);

  const handleChange = (option: SelectItemInterface) => {
    setSelectedOption(option);
    const resultValidation = validation({
      value: option.value,
      setError,
      setMessage,
      rules,
      fields,
    });
    setFields({ name, value: option.value, error: resultValidation.error });
  };

  useEffect(() => {
    if (submit) {
      validation({
        value: selectedOption ? selectedOption.value : '',
        setError,
        setMessage,
        rules,
        fields,
      });
    }
  }, [submit]);

  return (
    <div data-testid="select container" className="selectContainer">
      <ReactSelect
        name={name}
        clearable={false}
        className="input"
        isSearchable={isSearchable}
        isDisabled={isDisabled}
        defaultValue={selectedOption}
        onChange={handleChange}
        options={options}
        styles={{
          control: (styles) => ({ ...styles, border: 'none' }),
          valueContainer: (style) => ({
            ...style,
            padding: '0 0 0 18px',
            height: 54,
          }),
          placeholder: (style) => ({ color: '#b4b4b4' }),
        }}
      />

      {error && (
        <div className="errorContainer">
          <MessageErrorForm text={message} />
        </div>
      )}
    </div>
  );
};

export default Select;

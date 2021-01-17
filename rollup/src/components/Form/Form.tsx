import React, { FC, useRef, useState, createContext } from 'react';
import './style.scss';
import FieldsInterface from './interfaces/FieldsInterface';

// интерфейс для описания полей в форме
export interface KeyFormInterface {
  [key: string]: {
    defaultValue: string;
    defaultError: boolean;
  };
}

export interface FormContextInterface {
  submit: boolean;
  fields: FieldsInterface;
  setFields: ({
    name,
    value,
    error,
  }: {
    name: string;
    value: string;
    error: boolean;
  }) => void;
}

const initFields = (data: KeyFormInterface[]): FieldsInterface => {
  const fields: FieldsInterface = {};
  data.forEach((element) => {
    const name = Object.keys(element)[0];
    fields[name] = {
      value: '',
      error: true,
    };
    fields[name].value = element[name].defaultValue;
    fields[name].error = element[name].defaultError;
  });
  return fields;
};

export const FormContext = createContext({} as FormContextInterface);

export const Form: FC<{
  className?: string;
  buttonText?: string;
  data: KeyFormInterface[];
  onSubmit: (fields: any) => void;
}> = ({
  children,
  className = '',
  buttonText = 'ВОЙТИ В АККАУНТ',
  data,
  onSubmit,
}) => {
  const [fields, setFields] = useState<FieldsInterface>(initFields(data));
  const [submit, setSubmit] = useState<boolean>(false);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (errors.length > 0) {
  //     errors.forEach((itemError) => {
  //       if (fields[itemError.field]) {
  //         fields[itemError.field].error = true;
  //       }
  //     });

  //     setFields(fields);
  //   }
  // }, [errors]);

  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault();
        onSubmit(fields);
        setSubmit(true);
        return false;
      }}
      ref={ref}
      className={className}
      action="#"
      autoComplete="off"
    >
      <FormContext.Provider
        value={{
          submit,
          fields,
          setFields: ({
            name,
            value,
            error,
          }: {
            name: string;
            value: string;
            error: boolean;
          }) => {
            fields[name] = {
              value,
              error,
            };
            setFields(fields);
          },
        }}
      >
        {children}
      </FormContext.Provider>
      <button type="submit" className="buttonSubmit buttonSubmitPrimary">
        {buttonText}
      </button>
    </form>
  );
};

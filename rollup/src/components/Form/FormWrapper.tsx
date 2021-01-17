import React, { FC } from 'react';
import ErrorMessages from './interfaces/ErrorMessage';
import { KeyFormInterface } from './Form';

const FormWrapper: FC<{
  form: KeyFormInterface[];
  errors: ErrorMessages[];
}> = ({ children, form, errors }) => {
  const findError = ({ name }: { name: string }): ErrorMessages | undefined => {
    const error: ErrorMessages | undefined = errors.find((item) => {
      return item.field === name;
    });

    return error;
  };

  const renderChild = () => {
    return React.Children.map(children, (child: any, index) => {
      console.log('form', form);
      const name = Object.keys(form[index])[0];
      const error = findError({ name });
      // console.log('error?.message[0]', error?.message[0]);
      return React.cloneElement(child, {
        defaultValue: form[index][name].defaultValue,
        error: error?.message[0] ? true : form[index][name].defaultError,
        name,
        errorMessage: error?.message[0],
      });
    });
  };

  return <>{renderChild()}</>;
};

export default FormWrapper;

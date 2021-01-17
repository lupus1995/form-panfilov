import React, {
  FC,
  useRef,
  MutableRefObject,
  useState,
  useContext,
  useEffect,
} from 'react';
import './style.scss';
import consts from '../../../resourse/consts';
import { RulesValidationInterface } from '../rulesValidation/interfaces';
import validation from './helpers';
import MessageErrorForm from '../../MessageError/MessageErrorForm';
import { FormContext } from '../Form';

let debounceTimeoutId = 0;
const Input: FC<{
  type: string;
  classNames?: string;
  placeholder: string;
  rules: RulesValidationInterface;
  name?: string;
  defaultValue?: string;
  errorMessage?: string;
}> = ({
  type = 'text',
  classNames = '',
  placeholder,
  rules,
  name = '',
  defaultValue = '',
  errorMessage = '',
}) => {
  const { fields, setFields, submit } = useContext(FormContext);
  const typePassword = type === consts.typeInputPassword;
  const [readonly, setReadonly] = useState<boolean>(typePassword);
  const [message, setMessage] = useState<string>(errorMessage);
  const [error, setError] = useState<boolean>(false);
  const input: MutableRefObject<HTMLInputElement | null> = useRef(null);

  useEffect(() => {
    if (errorMessage.length > 0) {
      setMessage(errorMessage);
      setError(true);
    }
  }, [errorMessage]);

  const handleFocus = () => {
    if (typePassword && readonly) {
      setReadonly(false);
    }
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const resultValidation = validation({
      value: e.target.value,
      setError,
      setMessage,
      rules,
      fields,
    });
    setFields({ name, value: e.target.value, error: resultValidation.error });
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    clearTimeout(debounceTimeoutId);
    debounceTimeoutId = window.setTimeout(() => {
      e.target.value = e.target.value.substring(0, 255);
      const resultValidation = validation({
        value: e.target.value,
        setError,
        setMessage,
        rules,
        fields,
      });
      setFields({ name, value: e.target.value, error: resultValidation.error });
    }, 100);
  };

  useEffect(() => {
    if (submit && input.current) {
      validation({
        value: input.current.value,
        setError,
        setMessage,
        rules,
        fields,
      });
    }
  }, [submit]);

  return (
    <div className="inputConteiner">
      <input
        defaultValue={defaultValue}
        name={name}
        ref={input}
        type={type}
        readOnly={readonly}
        onFocus={handleFocus}
        className={`input inputPadding ${classNames}`}
        autoComplete="new-password"
        placeholder={placeholder}
        onBlur={handleBlur}
        onInput={handleInput}
      />
      {error && (
        <div className="errorContainer">
          <MessageErrorForm text={message} />
        </div>
      )}
    </div>
  );
};

export default Input;

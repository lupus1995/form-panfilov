## Description

React component that processes a form, its events and elements.

## Installation

```bash
npm i --save form-panfilov
```

## Using

Key component of the form

```bash
<Form
    data={defaultValue}
    onSubmit={(fields: AuthUserFormInterface) => {
        if (!fields.email.error && !fields.password.error) {
            dispatch(
                authRequestFunc({
                  email: fields.email.value,
                  password: fields.password.value,
                  signal: abortController.signal,
                }),
            );
        }
    }}
    className={classNames('d-flex flex-direction-column', {
        disabled: authRequest,
    })}
>
other form elements
</Form>
```

Props:

- data - an array of objects that contain information about the form fields. Form fields must match the interface AuthUserFormInterface.

```bash
interface AuthUserFormInterface {
    [key: string]: {
        defaultValue: string;
        defaultError: boolean;
    };
}
```

- onSubmit - a callback function that handles sending a function to the backend;;
- classname - writes custom classes for the form tag;
- buttonText - writes custom text for the submit button;

Wrapper component for form fields

```bash
<FormWrapper errors={errors} form={defaultValue}>
    fields form
<FormWrapper/>
```

Props:

- form - see the data props in the Form component described earlier;
- errors - an array of objects that contains information about errors in form fields. The array element must conform to the ErrorMessages interface.

```bash
interface ErrorMessages {
    field: string;
    message: string[];
}
```

Text box component

```bash
<Input
    rules={{ requiredInputRules, emailRules }}
    placeholder="Email"
    type="text"
/>
```

Props:

- type - input type;
- classNames - writes custom classes for the input tag;
- placeholder - placeholder for text field;
- rules - validation rules for the text field. For validation, it is necessary to create an object of rules according to which the text field will be validated. At this point in time, text fields are validated using the following interface RulesValidationInterface;
- name - the name of the text box;
- defaultValue - default value;
- errorMessage - field validation error message;

The fields classNames, name, defaultValue, errorMessage are optional.

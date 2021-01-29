## Description

React component that processes a form, its events and elements.

## Installation

```bash
npm i --save form-panfilov
```

## Testing

For testing, a bunch of jest and the testing library is used. To run the tests, type the following command

```bash
npm test
```

or command to restart the tests after they are changed

```bash
npm test:watch
```

## Example and development

In the rollup folder in the terminal, enter the following command to create a link to the local npm package.

```bash
npm link
```

In the same folder, you need to create a link to react and react-dom.

Link to react

```bash
npm link ..\defaultReact\node_modules\react
```

Link to react-dom

```bash
npm link ..\defaultReact\node_modules\react-dom
```

After that, go to the defaultReact folder and run the project with the command

```bash
npm link start
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

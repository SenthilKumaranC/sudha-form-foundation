import { useCallback, useRef, useState } from "react";
import { lengthValidator } from "../../validators/lengthValidator";
import { requiredValidator } from "../../validators/requiredValidator";
import InputStringField from "../InputStringField/InputStringField";

const FormLogicControlledWithReuse = () => {
  const formData = useRef<any>({});

  const fieldNames = useRef(["username", "password", "email", "phonenumber"]);

  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);

  const onSubmit = useCallback((e: any) => {
    e.preventDefault();
  }, []);

  const waitForChildNotification = useCallback((childData: any) => {
    formData.current[childData.name] = childData;

    const allValid = fieldNames.current.every((fieldName) => {
      const savedChildData = formData.current[fieldName];
      if (!!savedChildData && savedChildData.valid) {
        return true;
      } else {
        return false;
      }
    });

    if (allValid) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }

    console.log(formData);

  }, [fieldNames]);

  return (
    <form onSubmit={onSubmit}>
      <InputStringField
        name="username"
        validators={[requiredValidator]}
        onDataChange={waitForChildNotification}
        placeholder="Enter Username"
      ></InputStringField>
      <InputStringField
        name="password"
        validators={[requiredValidator]}
        onDataChange={waitForChildNotification}
        placeholder="Enter Password"
      ></InputStringField>
      <InputStringField
        name="email"
        validators={[requiredValidator, lengthValidator(5)]}
        onDataChange={waitForChildNotification}
        placeholder="Enter Email Address"
      ></InputStringField>
      <InputStringField
        name="phonenumber"
        validators={[requiredValidator]}
        onDataChange={waitForChildNotification}
        placeholder="Enter Phone Number"
      ></InputStringField>
      <button type="submit" disabled={submitDisabled}>
        Submit
      </button>
    </form>
  );
};

export default FormLogicControlledWithReuse;

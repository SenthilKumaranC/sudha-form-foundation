import { useCallback, useRef, useState } from "react";
import { lengthValidator } from "../../validators/lengthValidator";
import { requiredValidator } from "../../validators/requiredValidator";
import InputGroup from "../InputGroup/InputGroup";
import InputStringField from "../InputStringField/InputStringField";

const FormLogicControlledWithReuse = () => {
  const formData = useRef<any>({});

  const fieldNames = useRef(["username", "password", "email", "phonenumber"]);

  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);

  const onSubmit = useCallback((e: any) => {
    e.preventDefault();
  }, []);

  const waitForChildNotification = useCallback(
    (childData: any) => {
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
    },
    [fieldNames]
  );

 

  const [inputs, setInputs] = useState<any[]>([
    {
      id: "username",
      name: "username",
      validators: [requiredValidator("Please enter Username")],
      placeholder: "Enter Username",
    },
    {
      id: "password",
      name: "password",
      validators: [requiredValidator("Please enter Password")],
      placeholder: "Enter Password",
    },
  ]);

  const [inputs2, setInputs2] = useState<any[]>([
    {
      id: "username2",
      name: "username2",
      validators: [requiredValidator("Please enter Username2")],
      placeholder: "Enter Username2",
    },
    {
      id: "password2",
      name: "password2",
      validators: [requiredValidator("Please enter Password2")],
      placeholder: "Enter Password2",
    },
  ]);

  return (
    <form onSubmit={onSubmit}>
      
      <InputGroup inputs={inputs} waitForChildNotification={waitForChildNotification}></InputGroup>
      
      <InputGroup inputs={inputs2} waitForChildNotification={waitForChildNotification}></InputGroup>
      
      {/* <InputStringField
        disabled={!edit}
        name="username"
        validators={[requiredValidator("Please enter Username")]}
        onDataChange={waitForChildNotification}
        placeholder="Enter Username"
      ></InputStringField>
      <InputStringField
        disabled={!edit}
        name="password"
        validators={[requiredValidator("Please enter Password")]}
        onDataChange={waitForChildNotification}
        placeholder="Enter Password"
      ></InputStringField> */}
      {/* <InputStringField
        disabled={!edit}
        name="email"
        validators={[
          requiredValidator("Please enter Email"),
          lengthValidator(5),
        ]}
        onDataChange={waitForChildNotification}
        placeholder="Enter Email Address"
      ></InputStringField>
      <InputStringField
        disabled={!edit}
        name="phonenumber"
        validators={[requiredValidator("Please enter Phonenumber")]}
        onDataChange={waitForChildNotification}
        placeholder="Enter Phone Number"
      ></InputStringField> */}
      <button type="submit" disabled={submitDisabled}>
        Submit
      </button>
    </form>
  );
};

export default FormLogicControlledWithReuse;

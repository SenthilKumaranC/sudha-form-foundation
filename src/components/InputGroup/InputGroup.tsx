import { useCallback, useState } from "react";
import InputStringField from "../InputStringField/InputStringField";

const InputGroup = (props: any) => {
  const [edit, setEdit] = useState<boolean>(false);

  const toggleEdit = useCallback(() => {
    setEdit(!edit);
  }, [edit]);

  return (
    <>
      <button onClick={toggleEdit}>Edit</button>
      {props.inputs.map((input: any) => {
        return (
          <InputStringField
            key={input.id}
            disabled={!edit}
            name={input.name}
            validators={input.validators}
            onDataChange={props.waitForChildNotification}
            placeholder={input.placeholder}
          ></InputStringField>
        );
      })}
    </>
  );
};

export default InputGroup;

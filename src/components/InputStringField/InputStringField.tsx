import { useCallback, useEffect, useRef, useState } from "react";

const InputStringField = (props: any) => {
  //props.validators

  const [value, setValue] = useState<string>("");
  const valid = useRef<boolean>(false);
  const [error, setError] = useState<string>("");

  const validate = useCallback(
    (tempInputValue: string) => {
      let error = "";
      if (props.validators) {
        let valid = props.validators?.every((validator: any) => {
          error = validator(tempInputValue);
          if (error === undefined) {
            return true;
          } else {
            return false;
          }
        });
        return { valid, error };
      } else {
        return { valid: true, error: "" };
      }
    },
    [props.validators]
  );

  useEffect(() => {
    valid.current = validate(value).valid;
    if (props.onDataChange)
      props.onDataChange({
        name: props.name,
        value: value,
        valid: valid.current,
      });
  }, [props, validate, value]);

  const onChange = useCallback(
    (e: any) => {
      const tempInputValue = e.target.value;
      setValue(tempInputValue);
    },
    []
  );

  const onBlur = useCallback(
    (e: any) => {
      const tempInputValue = e.target.value;

      const { valid, error } = validate(tempInputValue);

      if (!valid) {
        setError(error);
      } else {
        setError("");
      }
    },
    [validate]
  );

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={props.placeholder}
      ></input>
      {!!error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export default InputStringField;

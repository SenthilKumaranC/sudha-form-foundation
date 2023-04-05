import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./InputStringField.css"

const InputStringField = (props: any) => {

  const { disabled, placeholder, validators, onDataChange, name } = props;

  const [value, setValue] = useState<string>("");
  const valid = useRef<boolean>(false);
  const [error, setError] = useState<string>("");

  const validate = useCallback(
    (tempInputValue: string) => {
      let error = "";
      if (validators) {
        let valid = validators?.every((validator: any) => {
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
    [validators]
  );

  useEffect(() => {
    valid.current = validate(value).valid;
    if (onDataChange)
      onDataChange({
        name: name,
        value: value,
        valid: valid.current,
      });
  }, [name, onDataChange, validate, value]);

  const onChange = useCallback((e: any) => {
    const tempInputValue = e.target.value;
    setValue(tempInputValue);
  }, []);

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

  useEffect(()=>{

    if(disabled){
      setError("");
      setValue("")
    }

  },[disabled])

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input
        disabled={disabled}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      ></input>
      {!!error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export default InputStringField;

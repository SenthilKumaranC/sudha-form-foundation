

import { useCallback, useState } from "react";
import { lengthValidator } from "../../validators/lengthValidator";
import { requiredValidator } from "../../validators/requiredValidator";
import InputStringField from "../InputStringField/InputStringField";



const FormLogicControlled = () => {


  //const usernameRef = useRef<HTMLInputElement | null>(null);
  const [username,setUsername] = useState<string>("");
  const onUsernameChange = useCallback((e:any)=>{
     console.log(e.target.value)
     const rawInput = e.target.value;
     if(rawInput.length <=5){
       setUsername(e.target.value)
     }
    
    },[])
  //const passwordRef = useRef<HTMLInputElement | null>(null);
  const [password,setPassword] = useState<string>("");
  const onPasswordChange = useCallback((e:any)=>{
    console.log(e.target.value)
    setPassword(e.target.value)
  },[])

  const onSubmit = useCallback((e:any)=>{
    e.preventDefault();
    console.log(username,password)
    //send data to server
    //console.log(usernameRef.current!.value)
    //console.log(passwordRef.current!.value)
  },[password, username]);

  const waitForChildNotification = useCallback(()=>{

  },[]);

  return (
    <form onSubmit={onSubmit}>
      <input value={username} onChange={onUsernameChange}  placeholder="Enter Username"></input>
      <input value={password} onChange={onPasswordChange} placeholder="Enter Password"></input>
      <InputStringField validators={[requiredValidator,lengthValidator(5)]} onDataChange={waitForChildNotification} placeholder="Enter Email Address"></InputStringField>
      <InputStringField validators={[requiredValidator]} onDataChange={waitForChildNotification} placeholder="Enter Phone Number"></InputStringField>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormLogicControlled;

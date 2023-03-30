//Validate the user input
//multiple

import { ChangeEvent, FormEvent, useCallback, useRef } from "react";

//Show Errors when use enters the wrong inside input box
//When you submit , you call show all errors
//Input 1 , Input 2(2 characters) , Input 3
//Error Text also helper text

//Control Submit Button
//Enable Submit Button , when user enters all data properly
//Disable Submit Button , if user didnt enter data properly

//similarities and differences

const FormLogicUncontrolled = () => {


  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = useCallback((e:any)=>{
    e.preventDefault();
    //send data to server
    console.log(usernameRef.current!.value)
    console.log(passwordRef.current!.value)
  },[]);
  return (
    <form onSubmit={onSubmit}>
      <input ref={usernameRef} placeholder="Enter Username"></input>
      <input ref={passwordRef} placeholder="Enter Password"></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormLogicUncontrolled;

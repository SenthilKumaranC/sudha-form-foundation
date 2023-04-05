export const requiredValidator = (customErrorMsg:string = "Please enter the value") => (inputValue: string) =>{
    return !!inputValue ? undefined : customErrorMsg;
}
 

export const requiredValidator = (inputValue: string) =>{
    return !!inputValue ? undefined : "Please enter the value";
}
 

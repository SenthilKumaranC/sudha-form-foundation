export const lengthValidator = (len:number)=>{
    return (inputValue:string)=>{
        if(!!inputValue && inputValue.length>=len){
            return undefined
        }else{
            return `You have to enter minimum ${len} characters`
        }
    }
}

/* export const lengthValidator2 = (inputValue:string,len:number)=>{

        if(!!inputValue && inputValue.length>=len){
            return undefined
        }else{
            return `You have to enter minimum ${len} characters`
        }
    
} */
import { parse } from "@babel/core";

const maior =(arg1,arg2)=>{
    
    let a = parseFloat(arg1);
    let b = parseFloat(arg2);

    return a > b?a:b;
}

export default maior;



import { environment } from '../configuration/environment';

function call1():number{
    return 0;
}

function call():number{
   // debugger
    let test:number = environment.port;
    console.log("port: ", test);
    call111();
    return 0;
}

function call111(){
    debugger
   return new Promise((resolve, reject) =>{
        setTimeout(() => {        
            resolve("!! result !!");
        }, 1000);
        setTimeout(() => {        
            reject("!! err !!");
        }, 2000);    
   })
   .then((response) => {
       debugger
   })
   .catch((err)=>{
       debugger
       console.log(err)
   })
};

export default call;

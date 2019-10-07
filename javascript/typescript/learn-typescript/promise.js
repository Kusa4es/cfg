function call111(){
    debugger
   return new Promise((resolve, reject) =>{
        setTimeout(() => {        
            resolve("!! result !!");
        }, 5000);
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

call111();
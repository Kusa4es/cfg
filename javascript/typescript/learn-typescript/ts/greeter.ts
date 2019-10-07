/// <reference path="data/personnel/namespace.ts" />
import Employee =  Data.Personnel.Employee; // bounded through namespace
//import {Phone, Call} from "./data/personnel/modules";// bounded through module


/*
* cmd commands:
* tsc --outDir D:\typeScript\greeting\out greeter.ts ---> path js file
* tsc file.ts ---> compile file
* tsc - h ----> call help
* –-removeComments ------> delete all comments after compile
*/



interface Person{
    firstName:string;
    lastName:string;
    someDo?():void;// знак "?" -  говорит о необязательной реализации эелемента
}



class MyObj{

    private value:string;

    public setValue(v:string):void{
        this.value = v;
    }

    public getValue():string{
        return this.value;
    }
 
    public someDoMyObj(){
        console.log("called someDoMyObj()");
    }
}

class Student extends MyObj implements Person {
    firstName:string;
    lastName:string;
    private readonly const:string = "not change value";
    private name:string;
    private surname:string;
    private age:number;    

    // public fullName: string;

    // constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    //     this.fullName = firstName + " " + middleInitial + " " + lastName;
    // }

    public  setName(name:string):void{
        this.name = name;
    }

    public getName():string{
        return this.name;
    }

    public setSurname(surname:string):void{
        this.surname = surname;
    }

    public getSurname():string{
        return this.surname;
    }    

    public setAge(age:number):void{
        this.age = age;
    }

    public getAge():number{
        return this.age;
    }

    public say():void{
        let a:string = this.const;
        console.log("hello world "+a);
      
    }

    public setTextInDoc():void{       
        let doc = document.getElementById("message");
        doc.innerText="hey chrome from class TS";   
    }

    public someDo():void{
        console.log("someDo() called");
    }
}

function greeter(person:Person):string{
    return "Hello, " + person.firstName+" "+person.lastName;
}
enum Season { Winter, Spring, Summer, Autumn };

function call():void{
    //debugger
    let userInfo = new Student();
    userInfo.setName("EVGEN");
    userInfo.setSurname("BARANOV"); 
    userInfo.setAge(32);
    let doc = document.getElementById("message");
    //doc.innerText="hey chrome from JS"; 
    //new Student().setTextInDoc();  
    doc.innerText = `user info: firstname ${userInfo.getName()} lastname: ${userInfo.getSurname()}, age: ${userInfo.getAge()}`
   
  

    
    let typeEnum:string = Season[3];
    console.log("season out: ",typeEnum); 
    
    console.log("studentList: ", studentList);
}

function foo(param:string, param2?:string):void{
    console.log("hey");
}
foo("1")

let studentList:Array<Student> = [new Student(), new Student(), new Student()];

// function promiseTest(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve("hey prom!");
//         }, 1000)
//     })
//     .then((response) => {
//         debugger
//         console.log("response promise success: ", response)
//     })
//     .catch((err) => {
//         console.error(err);
//     });
// }

//let user = {firstName:"evgen", lastName:"baranov"};
//let user = new Student("Jane", "M.", "User");
//document.body.textContent = greeter(user);

let user:Student = new Student();
user.setName("evgen");
user.setSurname("baranov");
user.setValue("value");
user.say();
user.someDo();
user.someDoMyObj();
user.setAge(32);
let sum = user.getAge() + user.getAge();
console.log("sum: ",sum);
document.body.textContent = `out:${user.getName()}, ${user.getSurname()},  ${user.getValue()}, sum= ${sum}`


function getString<String>(arg: Array<String>): string {
    let result = "";
    for (let i = 0; i < arg.length; i++) {
        if (i > 0)
            result += ",";
        result += arg[i].toString();
    }
    console.log(result);
    return result;
}
 
let result = getString<number>( [1, 2, 34, 5]);
console.log("------> ", typeof(result));


let strVal:string = "20";
let res:number = Number(strVal);
console.log("!!!res!!!: ", typeof(res));

let numVal:number = 20;
let resStr:string = String(numVal);
console.log("resStr: ", typeof(resStr));

let userInfoCortege:[string, number];
let strName:string = user.getName();
let age:number = user.getAge();
userInfoCortege = [strName, age];
console.log("userInfoCortege=== ",userInfoCortege);

let tom = new Employee("Tom")
console.log(tom.name)


console.log("-!--> age:", age);
let man:Person = {
    firstName: user.getName(),
    lastName:user.getSurname(),
    //someDo(){}
}

// let iphone: Phone = new Phone("iPhone X");
// Call(iphone);
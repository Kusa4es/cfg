namespace Data {
    export namespace Personnel {
    
        export interface IUser{
            displayInfo();
        }
        
        export class Employee {
            constructor(public name: string){
            }
        }
        
        export function work(emp: Employee) : void{
            console.log(emp.name, "is working");
        }
        
        export let defaultUser= { name: "Kate" }
    }
}
    
export interface Device{
    name: string;
}
     
export class Phone implements Device {
    name: string;
    constructor(n:string){
        this.name = n;
    }
}
     
export function Call(phone: Phone) : void{
    console.log("Make a call by", phone.name);
}

//export {Device, Phone, Call};
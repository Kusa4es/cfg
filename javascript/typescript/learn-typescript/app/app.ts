import {Phone, Call as makeCall} from "./devices";
let iphone: Phone = new Phone("iPhone X");
makeCall(iphone);

/*
* tsc app/app.ts ---- run in cmd, then started server  
* node server.js ==== run server
*/
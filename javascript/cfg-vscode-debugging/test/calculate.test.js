const sum = require('../src/calculate');

it("sum two numbers", () => {
    debugger
    let expectedResult = 3;
    let result = sum(2,1);
    if(result !== expectedResult){
		  throw new Error(`Expected ${expectedResult}, but got ${result}`);
	  }
})
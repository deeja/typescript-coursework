// pretty much lambda methods in C#

// inferred return type
const addTwoNumbersFirst = (val1: number, val2: number) => val1 * val2;

let resultFirst: number = addTwoNumbersFirst(2,3);

// explicit return type
const addTwoNumbersSecond = (val1: number, val2: number): number => { return val1 * val2 };

let resultSecond: number = addTwoNumbersSecond(7,8);

// no parameters and no return - inferred void
const doSomethingFromNothing = () => console.log("no params!");



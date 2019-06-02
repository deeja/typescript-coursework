
// "strict": true
// simple inferred types - won't compile if  "strict": true in compiler options

//function multiply(val1, val2){
//    return val1 * val2;
//}

// simple explicit types
function multiplyExplicit(val1: number, val2 : number): number{
    return val1 * val2;
}

let multiplyExplicitVal1: number = 43;
let multiplyExplicitVal2: number = 88

let multiplyExplicitResult = multiplyExplicit(multiplyExplicitVal1, multiplyExplicitVal2);
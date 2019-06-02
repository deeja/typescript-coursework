"use strict";
// "strict": true
// simple inferred types - won't compile if  "strict": true in compiler options
//function multiply(val1, val2){
//    return val1 * val2;
//}
// simple explicit types
function multiplyExplicit(val1, val2) {
    return val1 * val2;
}
var multiplyExplicitVal1 = 43;
var multiplyExplicitVal2 = 88;
var multiplyExplicitResult = multiplyExplicit(multiplyExplicitVal1, multiplyExplicitVal2);

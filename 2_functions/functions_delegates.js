"use strict";
// define the delegate - variable and type
var addTwoStringsDelegate;
// inferred return value
function addTwoStringsFirst(firstString, secondString) {
    return firstString + " " + secondString;
}
// explicit return value
function addTwoStringsSecond(firstString, secondString) {
    return firstString + " " + secondString;
}
// first using inferred return
addTwoStringsDelegate = addTwoStringsFirst;
// second using explicit return
addTwoStringsDelegate = addTwoStringsFirst;

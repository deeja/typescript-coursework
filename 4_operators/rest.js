"use strict";
// Rest - Groups elements into an array or tuple
function makeArrayUsingNumbers() {
    var input = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        input[_i] = arguments[_i];
    }
    return input;
}
var arrayFromNumbers = makeArrayUsingNumbers(1, 2, 3, 4);
// creating tuples by taking two arguments
function printInfo() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log(info[0], info[1]);
    return info;
}
var tuple = printInfo("a string", 55);

"use strict";
// pretty much lambda methods in C#
// inferred return type
var addTwoNumbersFirst = function (val1, val2) { return val1 * val2; };
var resultFirst = addTwoNumbersFirst(2, 3);
// explicit return type
var addTwoNumbersSecond = function (val1, val2) { return val1 * val2; };
var resultSecond = addTwoNumbersSecond(7, 8);
// no parameters and no return - inferred void
var doSomethingFromNothing = function () { return console.log("no params!"); };

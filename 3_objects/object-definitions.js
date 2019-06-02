"use strict";
// objects must follow the declaration which infers the type defintion 
var someData = {
    myFirstProperty: "That tree over there",
    mySecondProperty: 904
};
// Can't do the following:
// someData = {
//     cantSetThisProperty: "It wasn't on the original object that this is replacing"    
// }
someData = {
    myFirstProperty: "must be the same properties",
    mySecondProperty: 11
};
// using a type definition
var someComplexThing = {
    name: "follows the type definition",
    value: 949494,
    randomFunction: function (value) { return value + 1; }
};
var definedObject = {
    value1: "wasn't that",
    value2: "easy!"
};

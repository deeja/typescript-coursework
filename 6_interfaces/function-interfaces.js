"use strict";
var InterfaceFunctionTypes;
(function (InterfaceFunctionTypes) {
    var myFunctionType;
    myFunctionType = function (num1, num2) {
        return num1 * num2;
    };
    var returnedValue = myFunctionType(1, 2);
})(InterfaceFunctionTypes || (InterfaceFunctionTypes = {}));

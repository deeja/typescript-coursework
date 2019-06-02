"use strict";
// Using the index signature to allow any property
var InterfacesAllowAllProperties;
(function (InterfacesAllowAllProperties) {
    var TestClass = /** @class */ (function () {
        function TestClass() {
        }
        return TestClass;
    }());
    var testOne = new TestClass();
    // let testValue = testOne.anyPropertyNameIWant; // can't compile as doesn't find property
    var testTwo = new TestClass();
    var testValue = testTwo.anyPropertyNameIWant; // compiles fine
})(InterfacesAllowAllProperties || (InterfacesAllowAllProperties = {}));

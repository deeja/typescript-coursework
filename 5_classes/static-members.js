"use strict";
// Static members
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calculateCircumference = function (radius) {
        return this.PI * (2 * radius);
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
var sizeOfMyCircle = Helpers.calculateCircumference(55);

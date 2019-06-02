"use strict";
// Inheritance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// use the `extends` keyword
var Firefighter = /** @class */ (function (_super) {
    __extends(Firefighter, _super);
    function Firefighter(name, age, heightCentimetres) {
        var _this = _super.call(this, name, age, heightCentimetres) || this;
        _this.firesFought = 0;
        return _this;
    }
    return Firefighter;
}(Person));
// Overriding and calling base methods
// -> borrowed from https://stackoverflow.com/a/36614486/59532
var A = /** @class */ (function () {
    function A() {
    }
    // A protected method
    A.prototype.doStuff = function () {
        alert("Called from A");
    };
    // Expose the protected method as a public function
    A.prototype.callDoStuff = function () {
        this.doStuff();
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Override the protected method
    B.prototype.doStuff = function () {
        // If we want we can still explicitly call the initial method
        _super.prototype.doStuff.call(this);
        alert("Called from B");
    };
    return B;
}(A));
var a = new A();
a.callDoStuff(); // Will only alert "Called from A"
var b = new B();
b.callDoStuff(); // Will alert "Called from A" then "Called from B"

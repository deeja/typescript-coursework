"use strict";
// Decorators require `"compilerOptions" { "experimentalDecorators": true }`
// Examples of Decorator methods and factories
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ClassDecorators;
(function (ClassDecorators) {
    // Decorator method requires one parameter that is of type Function
    function logged(constructorFunction) {
        console.log(constructorFunction); // will output the class source that has been compiled
    }
    // Directly attaching method
    var SomeSampleClass = /** @class */ (function () {
        function SomeSampleClass() {
            // get the constructor name using ES6 
            var con = this.constructor;
            console.log("I have been created! " + con.name);
        }
        SomeSampleClass = __decorate([
            logged
        ], SomeSampleClass);
        return SomeSampleClass;
    }());
    var instance = new SomeSampleClass();
    /* console will output
    `function SomeSampleClass() {
        ... some code here ...
    }`
    and then
    `I have been created! SomeSampleClass`
        */
    // DECORATOR FACTORY 
    function loggable(enable) {
        if (enable) {
            return logged; // return the method previously defined
        }
        return function () { };
    }
    var AnotherSampleClassUsingADecoratorFactory = /** @class */ (function (_super) {
        __extends(AnotherSampleClassUsingADecoratorFactory, _super);
        function AnotherSampleClassUsingADecoratorFactory() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AnotherSampleClassUsingADecoratorFactory = __decorate([
            loggable(false)
        ], AnotherSampleClassUsingADecoratorFactory);
        return AnotherSampleClassUsingADecoratorFactory;
    }(SomeSampleClass));
    var instanceTwo = new AnotherSampleClassUsingADecoratorFactory();
    // outputs "I have been created! AnotherSampleClassUsingADecoratorFactory"
})(ClassDecorators || (ClassDecorators = {}));

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Parameter decorator
var ParameterDecorators;
(function (ParameterDecorators) {
    // not a factory, so returning void.
    function printInfo(target, methodName, parameterIndex) {
        console.log("target", target);
        console.log("methodName", methodName);
        console.log("parameterIndex", parameterIndex);
    }
    var SomethingOriginal = /** @class */ (function () {
        function SomethingOriginal() {
        }
        SomethingOriginal.prototype.doSomething = function (oneThing, secondThing, thirdThing) {
            console.log(oneThing, secondThing, thirdThing);
        };
        __decorate([
            __param(2, printInfo)
        ], SomethingOriginal.prototype, "doSomething", null);
        return SomethingOriginal;
    }());
    var thisThing = new SomethingOriginal();
    thisThing.doSomething("first", "second", "third");
    /*
    Output is as follows:
    target {doSomething: ƒ, constructor: ƒ}
    VM6349:17 methodName doSomething
    VM6349:18 parameterIndex 2
    VM6349:24 first second third
    */
})(ParameterDecorators || (ParameterDecorators = {}));

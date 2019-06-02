"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// adding a method using the JS prototype 
var DecoratorAddingMethods;
(function (DecoratorAddingMethods) {
    // add an incredibly annoying show alert method
    function addShowAlert(constructor) {
        constructor.prototype.showAlert = function (message) {
            alert(message);
        };
    }
    var NoAlertOnThisClass = /** @class */ (function () {
        function NoAlertOnThisClass() {
        }
        NoAlertOnThisClass = __decorate([
            addShowAlert
        ], NoAlertOnThisClass);
        return NoAlertOnThisClass;
    }());
    // need to cast to any to allow the dynamically added method to be used
    var instance = new NoAlertOnThisClass();
    // casting to any
    instance.showAlert("here is the alert!");
})(DecoratorAddingMethods || (DecoratorAddingMethods = {}));

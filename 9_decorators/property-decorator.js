"use strict";
// Property Decorator  - similar to method decorator, but no access to PropertyDescriptor
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PropertyDecorators;
(function (PropertyDecorators) {
    function overwritable(canOverwrite) {
        return function (target, propertyName) {
            var newDescriptor = { writable: canOverwrite };
            return newDescriptor;
        };
    }
    var AnotherProject = /** @class */ (function () {
        function AnotherProject(projectName) {
            this.projectName = projectName;
        }
        __decorate([
            overwritable(false)
        ], AnotherProject.prototype, "projectName", void 0);
        return AnotherProject;
    }());
    var anotherProject = new AnotherProject("this is the name");
    console.log("The project name is ", anotherProject.projectName);
})(PropertyDecorators || (PropertyDecorators = {}));

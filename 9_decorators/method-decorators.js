"use strict";
// method decorators 
// `function( target: any, propName: string, descriptor: PropertyDecorator){ .. some code ...}`
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MethodDecorators;
(function (MethodDecorators) {
    // using a factory here
    function editable(value) {
        return function (target, propName, descriptor) {
            descriptor.arguments.writable = value; // no longer writable
        };
    }
    var ProjectOfSomeSort = /** @class */ (function () {
        function ProjectOfSomeSort(projectName) {
            this.projectName = projectName;
        }
        ProjectOfSomeSort.prototype.calculateBudget = function () {
            console.log(1000);
        };
        __decorate([
            editable(false) // prevents this method from being edited
        ], ProjectOfSomeSort.prototype, "calculateBudget", null);
        return ProjectOfSomeSort;
    }());
})(MethodDecorators || (MethodDecorators = {}));

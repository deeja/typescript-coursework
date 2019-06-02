"use strict";
// Abstract classes and such
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
var AbstractClasses;
(function (AbstractClasses) {
    var Animal = /** @class */ (function () {
        function Animal() {
            this.age = 0;
        }
        Animal.prototype.increaseActualAgeByAYear = function () {
            this.age++;
        };
        Object.defineProperty(Animal.prototype, "animalAge", {
            get: function () {
                return this.age * this.animalYearsPerActualYear;
            },
            enumerable: true,
            configurable: true
        });
        return Animal;
    }());
    var Person = /** @class */ (function (_super) {
        __extends(Person, _super);
        function Person() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.animalYearsPerActualYear = 1;
            return _this;
        }
        return Person;
    }(Animal));
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.animalYearsPerActualYear = 7;
            return _this;
        }
        return Dog;
    }(Animal));
    var someDog = new Dog();
    someDog.increaseActualAgeByAYear();
    console.log(someDog.animalAge); // 7
    var somePerson = new Person();
    somePerson.increaseActualAgeByAYear();
    console.log(somePerson.animalAge); // 1
})(AbstractClasses || (AbstractClasses = {}));

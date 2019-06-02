"use strict";
// Singletons and private constructors
var FactoryPrivateConstructor;
(function (FactoryPrivateConstructor) {
    var ClassThatNeedsFactoryStyleCreation = /** @class */ (function () {
        function ClassThatNeedsFactoryStyleCreation(something) {
            this.something = something;
        }
        ClassThatNeedsFactoryStyleCreation.prototype.Create = function () {
            return new ClassThatNeedsFactoryStyleCreation("a string that was needed to be entered by this class for some good reason");
        };
        return ClassThatNeedsFactoryStyleCreation;
    }());
})(FactoryPrivateConstructor || (FactoryPrivateConstructor = {}));
var Singleton;
(function (Singleton) {
    // singleton example
    var MyAwesomeSingleton = /** @class */ (function () {
        function MyAwesomeSingleton() {
            // can't use this outside of this object          
        }
        MyAwesomeSingleton.getInstance = function () {
            if (!this.instance) {
                this.instance = new MyAwesomeSingleton();
            }
            return this.instance;
        };
        return MyAwesomeSingleton;
    }());
})(Singleton || (Singleton = {}));

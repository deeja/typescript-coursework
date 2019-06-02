"use strict";
// Generics 
// Only compiler based, so no code emitted especially for generics
var Generics;
(function (Generics) {
    // simple example
    function echo(value) {
        return value;
    }
    // takes two types and sets as properties
    var GenericExample = /** @class */ (function () {
        function GenericExample(someTea, someOfYou) {
            this.someTea = someTea;
            this.someOfYou = someOfYou;
        }
        return GenericExample;
    }());
    // generic types
    var echo2;
    echo2 = echo;
    echo2("same as echo");
    // generic arrays 
    var myGenericArray = [];
    myGenericArray.push("something");
    // myGenericArray.push(43) // number can't be pushed
    // Class constraints. can pipe types
    var SimpleJack = /** @class */ (function () {
        function SimpleJack(jack) {
            this.jack = jack;
        }
        return SimpleJack;
    }());
    var jack = new SimpleJack(5);
    //let jack2 = new SimpleJack("a string"); // compile issues as is string
})(Generics || (Generics = {}));

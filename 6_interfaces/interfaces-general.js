"use strict";
// Interfaces on classes and objects 
var InterfaceExamples;
(function (InterfaceExamples) {
    // CLASSES
    var Person = /** @class */ (function () {
        function Person(name, age, alive) {
            this.name = name;
            this.age = age;
            this.alive = alive;
            this.thisIsntAvailable = "not available through interface";
        }
        Person.prototype.poke = function () {
            console.log("poked class " + this.name);
        };
        Person.prototype.renamePerson = function (newName) {
            this.name = newName;
            return true;
        };
        return Person;
    }());
    var steveClass = new Person("Steve", 32, true);
    var age = steveClass.age;
    var name = steveClass.name;
    // let cantGetThis = steve.thisIsntAvailable; // not in the interface
    // OBJECTS
    var jamesObject = { age: 43, alive: true, name: "Jordan", poke: function () { console.log("poked object " + this.name); }, renamePerson: function (newName) { return true; } };
    function takesPerson(person) {
        person.poke();
        console.log(person.name);
    }
    takesPerson(steveClass);
    takesPerson(jamesObject);
})(InterfaceExamples || (InterfaceExamples = {}));

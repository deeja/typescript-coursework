"use strict";
// General setup
// Access modifiers:
// public = public access 
// protected = access with inheriting classes
// private = access only on this class
var Person = /** @class */ (function () {
    function Person(name, age, heightCentimetres) {
        this.name = name;
        this.age = age;
        this.heightCentimetres = heightCentimetres;
    }
    return Person;
}());
var me = new Person("Deeja", 99, 231);
// Can't publically see `age` or `heightCentimetres`
var myName = me.name;
var Dog = /** @class */ (function () {
    // now implicitly has public properties isGoodBoy and name
    function Dog(isGoodBoy, name) {
        this.isGoodBoy = isGoodBoy;
        this.name = name;
    }
    return Dog;
}());
var myDog = new Dog(true, "Smiggle");
var isGoodBoy = myDog.isGoodBoy;

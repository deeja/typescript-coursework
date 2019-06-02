// General setup

// Access modifiers:
// public = public access 
// protected = access with inheriting classes
// private = access only on this class


class Person {
    name: string; // public accessor by default
    private age: number;
    protected heightCentimetres: number;

    constructor(name:string, age:number, heightCentimetres: number){
        this.name = name;
        this.age = age;
        this.heightCentimetres = heightCentimetres;
    }
}

let me: Person = new Person("Deeja", 99, 231)

// Can't publically see `age` or `heightCentimetres`
let myName: string = me.name;

class Dog {
    // now implicitly has public properties isGoodBoy and name
    constructor(public isGoodBoy: boolean, public name: string){

    }
}

let myDog = new Dog(true, "Smiggle")
let isGoodBoy: boolean = myDog.isGoodBoy;

// Inheritance

// use the `extends` keyword

class Firefighter extends Person {

    firesFought: number;

    constructor(name: string, age: number, heightCentimetres: number)    {
        super(name, age, heightCentimetres) 
        this.firesFought = 0;
    }

}

// Overriding and calling base methods
// -> borrowed from https://stackoverflow.com/a/36614486/59532

class A {
    // A protected method
    protected doStuff()
    {
        alert("Called from A");
    }

    // Expose the protected method as a public function
    public callDoStuff()
    {
        this.doStuff();
    }
}


class B extends A {

    // Override the protected method
    protected doStuff()
    {
        // If we want we can still explicitly call the initial method
        super.doStuff();
        alert("Called from B"); 
    }
}

let a = new A();
a.callDoStuff(); // Will only alert "Called from A"

let b = new B()
b.callDoStuff(); // Will alert "Called from A" then "Called from B"
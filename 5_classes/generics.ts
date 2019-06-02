// Generics 
// Only compiler based, so no code emitted especially for generics

namespace Generics {

    // simple example
    function echo<T>(value: T): T {
        return value;
    }

    // takes two types and sets as properties
    class GenericExample<T, U> {
        constructor(public someTea: T, public someOfYou: U) {
        }
    }

    // generic types
    let echo2: <T>(data: T) => T;
    echo2 = echo;
    echo2("same as echo")


    // generic arrays 
    let myGenericArray: Array<string> = [];
    myGenericArray.push("something")
    // myGenericArray.push(43) // number can't be pushed

    // Class constraints. can pipe types
    class SimpleJack<T extends number|boolean>{
        constructor(public jack: T) { }
    }

    let jack = new SimpleJack(5);
    //let jack2 = new SimpleJack("a string"); // compile issues as is string


}
// Interfaces on classes and objects 

namespace InterfaceExamples {

    interface IPerson {
        name: string;
        age: number;
        alive: boolean;       
     
        
        poke(): void;
        renamePerson(newName: string): boolean;
    }

    // CLASSES

    class Person implements IPerson {

        thisIsntAvailable: string = "not available through interface"; 

        constructor(public name: string, public age: number, public alive: boolean) {}

        poke(): void {
            console.log("poked class "+ this.name)
        }
        renamePerson(newName: string): boolean {
            this.name = newName;
            return true;
        }
    }

    let steveClass : IPerson = new Person("Steve", 32, true);
    let age = steveClass.age;
    let name = steveClass.name;
    // let cantGetThis = steve.thisIsntAvailable; // not in the interface

    // OBJECTS
 
    let jamesObject : IPerson = {age: 43, alive: true,name: "Jordan", poke: function(){ console.log("poked object "+ this.name)}, renamePerson: function(newName: string){return true} };

    function takesPerson(person: IPerson): void{
        person.poke();
        console.log(person.name)
    }

    takesPerson(steveClass);
    takesPerson(jamesObject);


}
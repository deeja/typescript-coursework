// Decorators require `"compilerOptions" { "experimentalDecorators": true }`
// Examples of Decorator methods and factories

namespace ClassDecorators{
    
    // Decorator method requires one parameter that is of type Function
    function logged(constructorFunction : Function){
        console.log(constructorFunction); // will output the class source that has been compiled
    }

    // Directly attaching method
    @logged
    class SomeSampleClass{
        constructor(){
            // get the constructor name using ES6 
            let con: any = this.constructor;
            console.log("I have been created! " + con.name)
        }
    }

    var instance = new SomeSampleClass();
    /* console will output 
    `function SomeSampleClass() {
        ... some code here ...
    }` 
    and then
    `I have been created! SomeSampleClass`
        */

    // DECORATOR FACTORY 

    function loggable(enable: boolean)  {
        if (enable){
            return logged; // return the method previously defined
        }
        return function(){}
    }

    @loggable(false)
    class AnotherSampleClassUsingADecoratorFactory extends SomeSampleClass{

    }

    var instanceTwo = new AnotherSampleClassUsingADecoratorFactory();
    // outputs "I have been created! AnotherSampleClassUsingADecoratorFactory"
}
// Parameter decorator
namespace ParameterDecorators{

    // not a factory, so returning void.
    function printInfo(target: any, methodName: string, parameterIndex: number): void{
        console.log("target", target);
        console.log("methodName", methodName);
        console.log("parameterIndex",parameterIndex);
    }

    class SomethingOriginal {
        doSomething(oneThing: string, secondThing: string, @printInfo thirdThing: string): void{
            console.log(oneThing, secondThing, thirdThing);
        }
    }

    let thisThing = new SomethingOriginal();

    thisThing.doSomething("first", "second", "third")

    /*
    Output is as follows: 
    target {doSomething: ƒ, constructor: ƒ}
    VM6349:17 methodName doSomething
    VM6349:18 parameterIndex 2
    VM6349:24 first second third
    */
}
// Namespace export example

namespace NamespaceExport{
    namespace Birds{
        export enum BirdTypes{
            Flying, 
            Pointless
        }

        const bestBird: string = "Penguin"
    }

    function getBirdType(){
        // do some logic here
        return Birds.BirdTypes.Pointless;
    }

    let flyingBirdType: Birds.BirdTypes = getBirdType();

    if (flyingBirdType == Birds.BirdTypes.Flying){
        console.log("This bird type is " + Birds.BirdTypes[flyingBirdType])
    } else {
        console.log(`Why bother with existing if you're a ${Birds.BirdTypes[flyingBirdType]}` )
    }    

    //let best: string = Birds.bestBird;     // Can't access non exported members
}
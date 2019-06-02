// objects must follow the declaration which infers the type defintion 

let someData = {
    myFirstProperty: "That tree over there",
    mySecondProperty: 904    
}

// Can't do the following:
// someData = {
//     cantSetThisProperty: "It wasn't on the original object that this is replacing"    
// }

someData = {
    myFirstProperty: "must be the same properties",
    mySecondProperty: 11
}

// using a type definition
let someComplexThing : { name: string, value: number, randomFunction: (val1: number) => number} = {
    name: "follows the type definition",
    value: 949494,
    randomFunction: (value) => value + 1
}

// can use an alias for the defintion

type TheObjectDefintion = {value1 : string, value2: string};

let definedObject: TheObjectDefintion = {
    value1: "wasn't that",
    value2: "easy!"
}
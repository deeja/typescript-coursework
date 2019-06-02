// Enums

enum BodyPosition {
    Standing,
    Prone, 
    Sitting,
    Kneeling
}

let currentPosition: BodyPosition = BodyPosition.Sitting;

enum Bear {
    Sun = 1,
    Black = 100, 
    Brown = 200,
    Grizzly = 1000    
}

// The JS that is produced creates an object using index signatures
// e.g. {1: "Sun", 100: "Black", 200: "Brown", 1000: "Grizzly", Sun: 1, Black: 100, Brown: 200, Grizzly: 1000}

let bearChasingMe = Bear.Brown;

// output number (as it's compiled to raw js)
console.log("The Bear value is "+ bearChasingMe);

// output name when using array index
console.log("The Bear name  is "+ Bear[bearChasingMe]);

"use strict";
// Enums
var BodyPosition;
(function (BodyPosition) {
    BodyPosition[BodyPosition["Standing"] = 0] = "Standing";
    BodyPosition[BodyPosition["Prone"] = 1] = "Prone";
    BodyPosition[BodyPosition["Sitting"] = 2] = "Sitting";
    BodyPosition[BodyPosition["Kneeling"] = 3] = "Kneeling";
})(BodyPosition || (BodyPosition = {}));
var currentPosition = BodyPosition.Sitting;
var Bear;
(function (Bear) {
    Bear[Bear["Sun"] = 1] = "Sun";
    Bear[Bear["Black"] = 100] = "Black";
    Bear[Bear["Brown"] = 200] = "Brown";
    Bear[Bear["Grizzly"] = 1000] = "Grizzly";
})(Bear || (Bear = {}));
// The JS that is produced creates an object using index signatures
// e.g. {1: "Sun", 100: "Black", 200: "Brown", 1000: "Grizzly", Sun: 1, Black: 100, Brown: 200, Grizzly: 1000}
var bearChasingMe = Bear.Brown;
// output number (as it's compiled to raw js)
console.log("The Bear value is " + bearChasingMe);
// output name when using array index
console.log("The Bear name  is " + Bear[bearChasingMe]);

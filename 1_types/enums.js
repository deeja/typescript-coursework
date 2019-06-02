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
var bearChasingMe = Bear.Brown;
// output number (as it's compiled to raw js)
console.log("The Bear value is " + bearChasingMe);
// output name when using array index
console.log("The Bear name  is " + Bear[bearChasingMe]);

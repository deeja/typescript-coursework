"use strict";
// Namespace export example
var NamespaceExport;
(function (NamespaceExport) {
    var Birds;
    (function (Birds) {
        var BirdTypes;
        (function (BirdTypes) {
            BirdTypes[BirdTypes["Flying"] = 0] = "Flying";
            BirdTypes[BirdTypes["Pointless"] = 1] = "Pointless";
        })(BirdTypes = Birds.BirdTypes || (Birds.BirdTypes = {}));
        var bestBird = "Penguin";
    })(Birds || (Birds = {}));
    function getBirdType() {
        // do some logic here
        return Birds.BirdTypes.Pointless;
    }
    var flyingBirdType = getBirdType();
    if (flyingBirdType == Birds.BirdTypes.Flying) {
        console.log("This bird type is " + Birds.BirdTypes[flyingBirdType]);
    }
    else {
        console.log("Why bother with existing if you're a " + Birds.BirdTypes[flyingBirdType]);
    }
    //let best: string = Birds.bestBird;     // Can't access non exported members
})(NamespaceExport || (NamespaceExport = {}));

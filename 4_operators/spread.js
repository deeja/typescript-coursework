"use strict";
// Spread - for providing arrays to methods where individual elements are required
// effectively uses JS .apply to spread the array
var myMassiveArray = ["this", "is", "an", "example", "of", "an", "array"];
// returns ["this", "is", "an", "example", "of", "an", "array"]
console.log(myMassiveArray);
//returns "this is an example of an array"
console.log.apply(console, myMassiveArray);

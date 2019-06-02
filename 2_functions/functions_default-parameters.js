"use strict";
// default parameters!
function howLongIsTheGrassOverTime(timeInDays) {
    if (timeInDays === void 0) { timeInDays = 10; }
    return timeInDays * 25;
}
var howLongIsTheGrass = howLongIsTheGrassOverTime(25);
var howLongIsTheGrassNow = howLongIsTheGrassOverTime();
// reference previous parameters using defaults
function convolutedScenario(firstString, secondString) {
    if (firstString === void 0) { firstString = "some string"; }
    if (secondString === void 0) { secondString = "firstString is '" + firstString + "'"; }
    console.log(firstString, secondString);
}

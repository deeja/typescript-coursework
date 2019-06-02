"use strict";
// Enum Flags
var LifeDirection;
(function (LifeDirection) {
    LifeDirection[LifeDirection["None"] = 0] = "None";
    LifeDirection[LifeDirection["Coming"] = 2] = "Coming";
    LifeDirection[LifeDirection["Going"] = 4] = "Going";
})(LifeDirection || (LifeDirection = {}));
// Setting
var noDirection = LifeDirection.None;
var definitelyGoing = LifeDirection.Going;
// Combining
var comingAndGoing = LifeDirection.Going | LifeDirection.Coming;
// Adding 
var firstComingThenGoing = LifeDirection.Coming;
firstComingThenGoing |= LifeDirection.Going;
// Removing 
var initiallyBothComingAndGoingButActuallyJustGoing = LifeDirection.Coming | LifeDirection.Going;
// then "AND INVERSE" of Coming  i.e. 11 & 01 (inverse of Coming)  = 01
initiallyBothComingAndGoingButActuallyJustGoing &= ~LifeDirection.Coming;
// Checking a flag condition
var thisCouldBeAnything = LifeDirection.Going;
// AND then check is equal
var isGoing = (LifeDirection.Going == (thisCouldBeAnything & LifeDirection.Going));

// Enum Flags


enum LifeDirection {
    None,
    Coming = 1 << 1,
    Going = 1 << 2,

}

// Setting
let noDirection: LifeDirection = LifeDirection.None;
let definitelyGoing: LifeDirection = LifeDirection.Going;

// Combining
let comingAndGoing: LifeDirection = LifeDirection.Going | LifeDirection.Coming;

// Adding 
let firstComingThenGoing: LifeDirection = LifeDirection.Coming;
firstComingThenGoing |= LifeDirection.Going;

// Removing 
let initiallyBothComingAndGoingButActuallyJustGoing : LifeDirection = LifeDirection.Coming | LifeDirection.Going;
// then "AND INVERSE" of Coming  i.e. 11 & 01 (inverse of Coming)  = 01
initiallyBothComingAndGoingButActuallyJustGoing &= ~LifeDirection.Coming; 

// Checking a flag condition
let thisCouldBeAnything: LifeDirection = LifeDirection.Going;
// AND then check is equal
let isGoing = (LifeDirection.Going == (thisCouldBeAnything & LifeDirection.Going))
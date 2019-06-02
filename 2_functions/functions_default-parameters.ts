// default parameters!

function howLongIsTheGrassOverTime(timeInDays: number = 10): number {
    return timeInDays * 25;
}

let howLongIsTheGrass: number = howLongIsTheGrassOverTime(25);

let howLongIsTheGrassNow: number = howLongIsTheGrassOverTime();


// reference previous parameters using defaults
function convolutedScenario(firstString: string = "some string", secondString: string = `firstString is '${firstString}'`): void {
    console.log(firstString, secondString);
}
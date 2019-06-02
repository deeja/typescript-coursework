// Inferred return type
function whatIsTheWeatherOutside(){
    return "Good";
}

let weatherString : string = whatIsTheWeatherOutside();
// let weatherNumber : number = whatIsTheWeatherOutside();  // Doesn't compile

// explicit return type
function whatIsTheTemperature(): number{
    return 24;
}

let weatherTemp = whatIsTheTemperature();

// void - when you have nothing to return
function returnsNothing() : void {
    console.log("Doesn't return anything");
}


// never - when you don't expect a method to exit successfully 
function neverReturns(): never{
     throw new Error("Never returns!");
}


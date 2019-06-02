"use strict";
// Inferred return type
function whatIsTheWeatherOutside() {
    return "Good";
}
var weatherString = whatIsTheWeatherOutside();
// let weatherNumber : number = whatIsTheWeatherOutside();  // Doesn't compile
// explicit return type
function whatIsTheTemperature() {
    return 24;
}
var weatherTemp = whatIsTheTemperature();
// void - when you have nothing to return
function returnsNothing() {
    console.log("Doesn't return anything");
}
// never - when you don't expect a method to exit successfully 
function neverReturns() {
    throw new Error("Never returns!");
}

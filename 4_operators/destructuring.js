"use strict";
// destucturing
// putting bits of objects and arrays into variables easily
/// Arrays
var thisIsAnArray = ["first string", "second string", "third string", "fourth string"];
// assign variables using the array. Ignores array entries any not defined.
var first = thisIsAnArray[0], second = thisIsAnArray[1], third = thisIsAnArray[2];
console.log(first, second, third);
/// Objects
var someObjectIHaveMade = {
    trees: ["oak", "ash", "mahoganey"],
    beersConsumed: 4,
    bears: [{ name: "brown", colour: "brown" }, { name: "sun", colour: "dirty white" }]
};
var trees = someObjectIHaveMade.trees, bears = someObjectIHaveMade.bears;
var treesTypeTest = trees;
var bearsTypeTest = bears;
/*  ES6 example from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
const arr = ['a', 'b'];
const iter = arr[Symbol.iterator]();
while (true) {
    const {done,value} = iter.next(); // (A)
    if (done) break;
    console.log(value);
}
*/

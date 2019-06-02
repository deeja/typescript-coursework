// destucturing
// putting bits of objects and arrays into variables easily

/// Arrays

const thisIsAnArray : string[] = ["first string",  "second string", "third string", "fourth string"];

// assign variables using the array. Ignores array entries any not defined.
const [first,second,third] = thisIsAnArray;

console.log(first, second, third);

/// Objects

const someObjectIHaveMade = {
    trees: ["oak", "ash", "mahoganey"],
    beersConsumed: 4,
    bears: [{ name: "brown", colour: "brown"}, {name: "sun", colour:"dirty white"}]
}

const {trees, bears} = someObjectIHaveMade;

let treesTypeTest : string[] = trees;
let bearsTypeTest : {name:string, colour: string}[] = bears;

/*  ES6 example from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
const arr = ['a', 'b'];
const iter = arr[Symbol.iterator]();
while (true) {
    const {done,value} = iter.next(); // (A)
    if (done) break;
    console.log(value);
}
*/

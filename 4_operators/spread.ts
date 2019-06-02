// Spread - for providing arrays to methods where individual elements are required
// effectively uses JS .apply to spread the array


let myMassiveArray: string[] = ["this", "is", "an", "example", "of", "an", "array"];

// returns ["this", "is", "an", "example", "of", "an", "array"]
console.log(myMassiveArray);  

//returns "this is an example of an array"
console.log(...myMassiveArray) 


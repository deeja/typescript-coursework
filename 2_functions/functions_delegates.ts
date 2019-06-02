
// define the delegate (method) type - variable and type
let  addTwoStringsDelegate : (firstString: string, secondString: string) => string;

// inferred return value
function addTwoStringsFirst(firstString: string, secondString: string) { 
    return firstString +" "+ secondString;
}

// explicit return value
function addTwoStringsSecond(firstString: string, secondString: string): string {
    return firstString +" "+ secondString;
}

// first using inferred return
addTwoStringsDelegate = addTwoStringsFirst;

// second using explicit return
addTwoStringsDelegate = addTwoStringsFirst;
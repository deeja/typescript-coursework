// Rest - Groups elements into an array or tuple

function makeArrayUsingNumbers(...input: number[]): number[]{
    return input;
}

let arrayFromNumbers = makeArrayUsingNumbers(1,2,3,4)


// creating tuples by taking two arguments

function printInfo(...info: [string, number]): [string, number]{
    console.log(info[0], info[1])  
    return info;
}

let  tuple = printInfo("a string", 55);
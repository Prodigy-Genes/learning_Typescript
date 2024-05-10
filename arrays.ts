// Typescript has a specific syntax for typing arrays

//const names: string[] = [];
//names.push("Dylan"); // no error
// names.push(3); // error
//console.log(names);

// keyword: Readonly
// This keyword can prevent arrays from being changed

//const names: readonly string[] = ["Dylan"];
// names.push("Jack"); // error
// try removing the readonly

// Type: Inference
// Typescript can infer the type of an array if it has value
const numbers = [1,2,3]; // inferred to the type number[]
numbers.push(4); // no error
// commenting line below out to see the successful assignment 
// numbers.push("2"); // error

let head: number = numbers[0];
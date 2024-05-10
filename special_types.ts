// Type : any
// any is a type that disables type checking and effectively allows all types to be used.

let u = true;
// u = "string"; // an error occurs 

// an example with any
let v: any = true;
v = "string"; //  there's no errorS

// Type : unknown
// unknown is similar but safer alternative to any

let w: unknown = 1;
w = "string"; // no error
w = {
    runANonExistentMethod: () => {
        console.log("I think therefore I am");
    }
} as { runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below when we don't know the type
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if (typeof w === 'object' && w !== null) {
    (w as {runANonExistentMethod: Function}).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting


// Types : undefined & null
// undefined and null are types that refer to the Javascript primitives undefined and null

let y: undefined = undefined;
let z: null = null;
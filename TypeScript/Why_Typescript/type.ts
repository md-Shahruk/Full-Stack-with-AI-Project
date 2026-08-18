/*
  JS Problems:
    - app breaks when someone uses it wrong
       like : add(5,"10") output: 510 thats not correct
    - no type info can't show add() expects num or string
    - change one function, break 100 places, no warning

*/

// typescript code
 
function add(a: number, b: number): number{
    return a + b;
}

// add(5, "10"); // show compile time error but it miss in js


console.log(add(15, 25)); // thats work


/*
 how tsc work in ts:
   - write .ts files (TypeScript)
   - run tsc file.ts
   - tsc checks for type error
   - tsc remove all type annotations ( a: number, b: number)
   - tsc gives .js files
   - run tsc files 

*/
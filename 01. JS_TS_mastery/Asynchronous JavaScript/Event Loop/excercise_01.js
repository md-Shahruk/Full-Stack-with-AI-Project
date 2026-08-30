
// Example 01
console.log("Excercise 01 Output:");

async function foo() {
    console.log("A");
    await bar();
    console.log("B");
    setTimeout(() => {
        console.log("C");
    }, 0);
}

async function bar() {
    console.log("D");
    await Promise.resolve();
    console.log("E");
}

console.log("F");
foo();
console.log("G");

setTimeout(() => {
    console.log("H");
}, 0);

Promise.resolve()
    .then(() => {
        console.log("I");
    })
    .then(() => {
        console.log("J");
    });

/*
 Example 01 Output: F, A, D, G, E, I, B, J, H, C
 // continuation job
*/

console.log();

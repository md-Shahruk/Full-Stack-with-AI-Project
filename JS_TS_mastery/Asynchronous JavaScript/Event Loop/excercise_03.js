async function task1() {
    console.log("A");//
    await task2();
    console.log("B");
    await Promise.resolve();
    console.log("C");
}

async function task2() {
    console.log("D");//
    await task3();
    console.log("E");
}

async function task3() {
    console.log("F");//
    await Promise.resolve();
    console.log("G");
}

console.log("H");
setTimeout(() => {
    console.log("I");
}, 0);

task1();

Promise.resolve()
    .then(() => {
        console.log("J");
    })
    .then(() => {
        console.log("K");
    })
    .then(() => {
        console.log("L");
    });

console.log("M");

// Output: H,A,D,F,M,G,J,E,K,B,L,C,I
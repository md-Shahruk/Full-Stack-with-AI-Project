console.log("1");

setTimeout(() => {
    console.log("2");
    Promise.resolve().then(() => {
        console.log("3");
    });
}, 0);

Promise.resolve()
    .then(() => {
        console.log("4");
        setTimeout(() => {
            console.log("5");
        }, 0);
    })
    .then(() => {
        console.log("6");
    });

setTimeout(() => {
    console.log("7");
    Promise.resolve().then(() => {
        console.log("8");
    });
}, 0);

console.log("9");

// Output: 1,9,4,6,2,3,7,8,6
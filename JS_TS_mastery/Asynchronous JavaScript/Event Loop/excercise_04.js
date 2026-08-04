console.log("1");

setTimeout(() => { // t1
    console.log("2");
    Promise.resolve()//p3
        .then(() => {
            console.log("3");
        })
        .then(() => {
            console.log("4");
            setTimeout(() => {//t5
                console.log("5");
            }, 0);
        });
}, 0);

Promise.resolve()//p1
    .then(() => {
        console.log("6");
        setTimeout(() => {// t4
            console.log("7");
            Promise.resolve()
                .then(() => {
                    console.log("8");
                });
        }, 0);
    })
    .then(() => {
        console.log("9");
    });

setTimeout(() => {//t2
    console.log("10");
    queueMicrotask(() => {
        console.log("11");
    });
    Promise.resolve()
        .then(() => {
            console.log("12");
        });
}, 0);

console.log("13");

queueMicrotask(() => {
    console.log("14");
});

setTimeout(() => {//t3
    console.log("15");
}, 0);

// Output: 1,13,6,14,9,2,3,4,10,11,12,15,7,8,5
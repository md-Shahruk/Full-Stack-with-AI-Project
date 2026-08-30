
// Promise.race() - First one wins; return the first promise either success or reject ignore the rest



const promise1 = new Promise((resolve)=>{
    setTimeout(()=> resolve("First one.."), 1000);
})

const promise2 = new Promise((resolve)=>{
    setTimeout(()=> resolve("second.."), 2000);
})

// const promise3 = new Promise((resolve)=>{
//     setTimeout(()=> resolve("third.."), 500);
// })
// Output: third because its time 500ms means first one finished


// now go for reject
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=> reject("failed immediately.."), 500);
})

Promise.race([promise1, promise2, promise3])
.then((res)=>{
    
    console.log(res);
    
    
})
.catch((er)=>{
    console.log(er);
    
})

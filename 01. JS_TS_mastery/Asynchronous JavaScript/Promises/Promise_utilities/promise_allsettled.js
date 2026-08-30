
// Promise.allSettled(): waits for every promise to finish never fails give status for each.


const promise1 = new Promise((resolve)=>{
    setTimeout(()=> resolve("Taken order.."), 1000);
})

const promise2 = new Promise((resolve)=>{
    setTimeout(()=> resolve("Order loaded.."), 2000);
})

const promise3 = new Promise((resolve)=>{
    setTimeout(()=> resolve("Products loaded.."), 1500);
})

const promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=> reject("failled.."), 3500);
})


Promise.allSettled([promise1, promise2, promise3, promise4])
.then((res)=>{
    console.log("All done");
    console.log(res);
    
    
})
.catch((er)=>{
    console.log(er);
    
})

/*
Output:
  All done
[
  { status: 'fulfilled', value: 'Taken order..' },
  { status: 'fulfilled', value: 'Order loaded..' },
  { status: 'fulfilled', value: 'Products loaded..' },
  { status: 'rejected', reason: 'failled..' }
]
*/
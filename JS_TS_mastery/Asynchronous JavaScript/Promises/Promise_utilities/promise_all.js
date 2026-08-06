/*
  Promise.all(): Wait for every promise to finish. If any fails, it fails immediately.
*/

const promise1 = new Promise((resolve)=>{
    setTimeout(()=> resolve("Taken order.."), 1000);
})

const promise2 = new Promise((resolve)=>{
    setTimeout(()=> resolve("Order loaded.."), 2000);
})

const promise3 = new Promise((resolve)=>{
    setTimeout(()=> resolve("Products loaded.."), 1500);
})

// const promise4 = new Promise((resolve)=>{
//     setTimeout(()=> resolve("Complete.."), 500);
// })

// now change for check fail 
const promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=> reject("failed.."), 3500);
})
/*
  ouput: failed...
  dosen't wait for success 2sec
*/

Promise.all([promise1, promise2, promise3, promise4])
.then((res)=>{
    console.log("All done");
    console.log(res);
    
    
})
.catch((er)=>{
    console.log(er);
    
})
/*
  This time output:

All done
[
  'Taken order..',
  'Order loaded..',
  'Products loaded..',
  'Complete..'
]

 here complete each promise but if any fails then then it fails immediately.

*/
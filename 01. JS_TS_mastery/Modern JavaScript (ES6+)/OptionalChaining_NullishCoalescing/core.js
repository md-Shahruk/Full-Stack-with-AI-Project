// optional chaining ?. - if missing , give me undefined instead of crashing
// nullish coalescing ?? - use the righ sight value only if the left-side value is null or undefined

console.log("-----Optional Chaining------");
const user = {
    name: "Shahurk",

}

// old way
const city =  user.address && user.address.city; // works but ugly

const citty = user.address?.citty;
//console.log(citty); // undefined



const cart = {
    item: 0,
}

const itemCount = 5 || cart.item;
console.log(itemCount); // 5 but also 0 is ta valid 

const itemCount_ = cart.item ?? 5;
console.log(itemCount_); // 0 becasue because only if letf side null or undefined then return right side value


// use case

const user1 = {
    profile:{
        name: "Shahruk",
    }
    
    // no age
}

const age = user1.profile?.age ?? 25;
// if age exist then print age otherwise use 25 instead
console.log(age);






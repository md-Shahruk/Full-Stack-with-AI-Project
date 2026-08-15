// Arrays pulling things out
const numbers = [10,20,30];
const [f,s,l] = numbers;
// console.log(f);
// console.log(s);
// console.log(l);

// the rest operator trick
const [first, ...rest] = numbers;
console.log(rest);

// Objects pulling things out
console.log("----Objects--------");
const user = {
    name: "Shahruk",
    age: 25
}




// if want different variable name
const{name: userName} = user;
console.log(userName); // and previous name doesn't exist

//  when someting misssing
const{ address = "Dhaka"} = user;
console.log(address);


// immutable updates
const newUser = {
    name: "Shatil",
    age: 26,
}

const updateUser = {
    ...newUser,
    name: "Rahim"
}
console.log(newUser);

console.log(updateUser);







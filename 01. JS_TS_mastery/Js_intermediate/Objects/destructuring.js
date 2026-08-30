// Insted of doing this
const user = {name:"Shahruk", age: 26};
/*
const name = user.name;
const age = user.age;
*/

// We can do this
const {age, name} = user;
console.log(name);
console.log(age);


// spread operator  and combine
const user2 = {name: "Shatil"}
const details = {age: 26, city:"Mymensingh"}
const combined = {...user2, ...details};
console.log(combined);

// rest operator 
const user3 = { namee: "Sohan", agee: 25, city: "Dhaka", country: "Bangladesh" };
const {namee, agee,  ...rest} = user3;
console.log(namee);
console.log(rest);




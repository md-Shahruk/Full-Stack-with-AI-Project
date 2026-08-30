
// returns the first element that passes the test
const arr = [{id:1, name:"Shatil"}, {id:2, name:"Shahruk"}];
const user = arr.find(u => u.id === 2);
console.log(user.name);

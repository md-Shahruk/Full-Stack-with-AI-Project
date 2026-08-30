// if something is iterables use for...of
// iterators

const names = ["Shahruk", "Shatil", "Karim"];

for( const name of names){
    console.log(name);
    
}

// String iterables
const s = "Shahruk";
for(const char of s){
    console.log(char);
    
}

console.log("-----key value pair-----");
const userMap = new Map();
userMap.set("name:", "Sharuk");
userMap.set("age:", 26);

for(const [key, value] of userMap){
     console.log(key, value);
     
}

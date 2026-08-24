
// Generics Interfaces

interface Box<T>{
    value: T;
}

const useNumber: Box<number> = {
    value: 10,
}

const useString: Box<string> ={
    value: "Shahruk",
}

interface User {
    name: string;
    age: number;
}

const person:Box<User> ={
    value:{
        name: "Shatil",
        age: 26
    },
}  

console.log(person.value.name);


//-------------------------------------CONSTRAINTS---------------------------------

//

function gettId<T> (item: T){
    return item.id; // error ts doesn't know if item has id or not
} 

// and typescript gives an error for those
gettId(10);
gettId("u_1");



// Solution: Constraints- pass any type but it must have an id property

function getId< T extends {id:string}>(item: T){
    return item.id;
}

console.log(getId({id:"01", name:"Shahruk"}));
console.log(getId({id:"user_01", price:100}));



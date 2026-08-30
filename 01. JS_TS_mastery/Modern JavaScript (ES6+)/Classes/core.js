// constructor: It is a special function that runs authmatically when create a new object form the class.

class User{
    constructor(name){
        this.name = name;
    }
    
    greet(){
        console.log(`Hello ${this.name}`);
        
    }
}

/*
new User("Shahruk") calls the constructor with "Shahruk"
inside the constructor, `this` the new object being created
store the name on specific object this.name = name


*/
const u1 = new User("Shahruk");
u1.greet();


// extends: lets create a child class that inherits everything from a parent class
// super: how call the parent constructor or methods


class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        return `${this.name} make sound.`;
    }
}

class Cat extends Animal{
    constructor(name, color){
        super(name);
        this.color = color;
    }

    speak(){
         return `${this.name} mew mew.`;
    }

    discribe(){
        return `Name:${this.name}  and color:${this.color}`;
    }
}

const cat = new Cat("Shippi", "White");
console.log(cat.speak());
console.log(cat.discribe());


// Getters: reads a property
// Setters: run a logic assing value

class Profile{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
        this._age = 0;
    }

    get fullName(){
        return `${this.fname}${this.lname}`;
    }

    get age(){
        return this._age;
    }

    
   set age(value){
      if (value < 0){
        console.log("Age can't negative.");
        
      }else{
        this._age = value;
      }
   }
}

const u = new Profile("Md", "Shahruk");
console.log(u.fullName);
u.age = 25;
console.log(u.age);



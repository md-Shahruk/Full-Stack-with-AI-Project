/*
  how to define shape of data, make them reusable, and understand when to use them.

  interface like a blueprint for a objects. 

  -badly need in handle api response
*/

//------------------------------BASIC INTERFACES------------------------------------

interface User {
    id: number;
    name: string;
    email: string;
}

// use this interface

const user1:User = {
    id: 1,
    name: "Shahruk",
    email: "md@gmail.com"
}

// also this works
const user2:User = {
    id: 2,
    name: "Shatil",
    email: "shatil@gmail.com"
}

// that will not work: missing email

const user3:User = {
    id: 3,
    name: "Kamal",
   
}
// also this will be error

const user4:User = {
    id: "4", // should be number
    name: "Hiron"
}

// sometimes properties exist or not: optional properties

interface Person{
    id: number;
    name: string;
    email?:string;
    phone?:number;
}

// thats valid
const p1: Person = {
    id: 1,
    name: "Shihab",
    email: "sh@gmail.com",
}

// thats valid
const p2: Person = {
    id: 2,
    name: "Roni",
   
}



// ---------------------- READ ONLY PROPERTIES------------------------

// readonly: prevent changing a property after it's set

interface Employee {
     readonly id:number;
     name: string;
     email: string;
}

const em:Employee = {
    id: 1,
    name: "Sharif",
    email: "sha@gmail.com"
}

em.id = 2; // not valid
em.name = "Shifat"; // valid

interface UserProfile {
    readonly username: string; // can't change name
    readonly creatAt: Date; // can't change data
    displayname: string; // can change
}



// -------------------------EXTENDING INTERFACES-------------------------------
interface student {
    readonly id: number;
    name: string;
    email: string;
}

interface access {
    permission?: string[];
    role?: "admin" | "Super admin";
}

interface talent extends student, access {
    speciality: string;
    nick_name: string;
}

const findTalent: talent = {
    id: 125,
    name: "Joss Hazlewood",
    nick_name: "Josssiii",
    email: "joss@gmail.com",
    speciality: "Coding",

}

/// ------------------------------INTERFACES VS TYPE----------------------------

// both can describe object

// Declaration merging: interface only

interface declaration {
    id: number;
}

interface declaration {
    name: string;
}

const d: declaration = {
    id: 1,
    name: "John"
};

// type can't do duplicate 
type U = { id: number };
type U = { name: string };  





///// Union and complex types: Type only

// type can be union
type Status = "pending" | "approved" | "rejected";

// type can be union of interfaces
type UserOrAdmin = User | Admin;

// also type can create new types from existing ones
type ReadonlyUser = {
    readonly [K in keyof User]: User[K];
};

// interface can not do unnions
interface Status = "pending" | "approved";  


//// Tuples: type only
type tuplesonly = [string, number, boolean];

  




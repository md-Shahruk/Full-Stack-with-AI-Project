
// Primitive Types
// String
let user: string = "Shahurk";
let greet: string = `Hello ${user}`;

// Number
let age: number = 25;
let price: number = 99.99;
let negative: number = -10;

// boolean
let isStudent: boolean = true;
let isEmployed: boolean = false;
let isActive: boolean = true;

//Arrays
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Shahruk", "Shatil", "Kamal"];
let booleans: boolean[] = [true, false, true];

// another way
let numberrs: Array<number> = [1, 2, 3, 4];


// Tuple: Fixed positions, Fixed types
let person: [string, number] = ["Shahruk", 101];

// any: stops all type checking
let data: any = "helllo"; 
data = 123;
data = true;

// Unknow: cannot use it until prove what type it is.
// real use 

function userInput(value: unknown){
    if( value === "string"){
        return;
    }
    if (value === "number"){
        return;
    }
}

// void functions: that do something but don't return a value
// actually this function has no return statement or simply return

function doNoting(): void{
    return;
}



// never functions: always throws an error, runs forever

function error(mes: string): never {
  throw new Error(mes);// this function never returns it throws an error
}

function infiniteLoop(): never{
    while(true){
        
    }
}
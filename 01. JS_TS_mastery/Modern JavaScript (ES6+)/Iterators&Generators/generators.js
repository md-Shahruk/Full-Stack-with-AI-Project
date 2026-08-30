// Functions that pause

// A generator is a function that can stop in the middle, give a value, and wait for ask for the next value

/*
  yield: Pause here and send this value back
  next(): resume the function and run untill the next yield

  value: the value yield
  done: false if there are more values, true if the functiion finished

*/

function* numberss(){
    yield 1;
    yield 2;
    yield 3;
}

const generator = numberss();
console.log(generator.next()); //{ value: 1, done: false }
console.log(generator.next()); //{ value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }



// Why need generator

// if want to make number 1 to 10000
// create whole array in a memory
const numbers = [];
for (let i = 1; i <= 10000; i++){
    numbers.push(i)
}

// using generator 
// here no need to keep all numbers in memory together
function* numbersss(){
    for (let i = 1; i <= 10000; i++){
        yield i;
    }
}

const nums = numbersss();

console.log(nums.next().value);
console.log(nums.next().value);
console.log(nums.next().value);

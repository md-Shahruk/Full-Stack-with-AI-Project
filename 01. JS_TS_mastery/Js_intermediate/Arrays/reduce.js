//reduce array to single value and return a accumlated value
const arr = [1,2,3,4];
const total = arr.reduce((acc, cur)=> acc +  cur, 0);
console.log(total);

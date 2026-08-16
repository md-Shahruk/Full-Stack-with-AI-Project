
// value:--, done: --, next()

function myCounter (times){
    let count = 0;
    return{
        next(){
            count ++;
            if (count <= times){
                return{
                value: count,
                done: false,
 
            }
           
            }
            return{
                value: undefined,
                done: true,
            }
        }
    }
}

const myGenerator = myCounter(3);

console.log(myGenerator.next());
console.log(myGenerator.next());

console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());

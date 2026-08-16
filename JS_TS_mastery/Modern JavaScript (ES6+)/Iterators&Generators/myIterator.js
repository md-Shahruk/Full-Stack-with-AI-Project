
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

const myIterator = myCounter(3);

console.log(myIterator.next());
console.log(myIterator.next());

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());

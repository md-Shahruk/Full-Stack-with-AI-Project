function myForEach(arr, fn){
    for(let i = 0; i < arr.length; i++){
        fn(arr[i])
    }
}

function printItem(num){
    console.log(num);
    
}

const arr = [1, 2, 3];

const result = myForEach(arr, printItem);
console.log(result); // prints undefined becasue forEach return nothing
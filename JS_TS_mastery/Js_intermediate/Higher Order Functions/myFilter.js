
function myFilter(arr, fn){
    let store = [];
    for(let i = 0; i < arr.length; i++){
        const chngeItem = fn(arr[i]);
        if(chngeItem){
            store.push(arr[i])
        }
    }
    return store;
}

function evenCheck(num){
    return num % 2 === 0;
}

const arr = [1,2,3,4];
const res = myFilter(arr, evenCheck);
console.log(res);


function myMap(arr, fn){
    let store = [];
    for (let i = 0; i < arr.length ; i++){
        const changeItem = fn(arr[i]);
        store.push(changeItem);
    }
    return store;
}

function double(num){
    return num * 2;
}
const arr = [1,2,3];

const result = myMap(arr, double);

console.log(result);

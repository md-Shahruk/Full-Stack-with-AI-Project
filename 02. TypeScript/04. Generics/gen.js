"use strict";
/*
  If i want to write fucntion for different type then what should i do?
*/
function getFirstNumber(items) {
    return items[0];
}
function getFirstString(items) {
    return items[0];
}
// So, every time for different type need write new function . That's not a good appraoch.
// Insted of write each time new function we can do it better way using generic.
// functio for getting last item
function getFirst(items) {
    return items[0];
    // T is a placeholder
    // items: T[] means ararys of whatever type T is
    // : T means return whatever type T is
}
const firsNumber = getFirst([1, 2, 3]);
const firstString = getFirst(["A", "B", "C"]);
console.log(firsNumber);
console.log(firstString);
// function for getting last item
function lastItem(items) {
    return items[items.length - 1];
}
console.log(lastItem([1, 2, 3]));
//reverse aray
function reverseArray(items) {
    const rev = [...items].reverse();
    return rev;
}
console.log(reverseArray(['a', 'b', 'c']));

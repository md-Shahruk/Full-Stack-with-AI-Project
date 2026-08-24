"use strict";
// Generics Interfaces
const useNumber = {
    value: 10,
};
const useString = {
    value: "Shahruk",
};
const person = {
    value: {
        name: "Shatil",
        age: 26
    },
};
console.log(person.value.name);
//-------------------------------------CONSTRAINTS---------------------------------
//
function gettId(item) {
    return item.id; // error ts doesn't know if item has id or not
}
// and typescript gives an error for those
gettId(10);
gettId("u_1");
// Solution: Constraints- pass any type but it must have an id property
function getId(item) {
    return item.id;
}
console.log(getId({ id: "01", name: "Shahruk" }));
console.log(getId({ id: "user_01", price: 100 }));

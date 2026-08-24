"use strict";
function getId(data) {
    return data.id;
}
function findById(items, id) {
    return items.find(item => item.id === id);
}
const sampleUsers = [
    { id: "u1", name: "Jahid", email: "jahid@gmail.com" },
    { id: "u2", name: "Jaber", email: "jaber@gmail.com" }
];
const sampleTasks = [
    { id: "t1", title: "Write code", done: false },
    { id: "t2", title: "Test app", done: true }
];
const sampleProducts = [
    { id: "p1", name: "Laptop", price: 1000 },
    { id: "p2", name: "Mouse", price: 50 }
];
console.log(getId(sampleUsers[0]));
console.log(findById(sampleProducts, "p2"));

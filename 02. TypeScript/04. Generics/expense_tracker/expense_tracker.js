"use strict";
// MINI PROJECT- Expense Tracker
// helper function for handle api response
function apiResponse(fn) {
    try {
        return { success: true, data: fn() };
    }
    catch (error) {
        return { success: false, data: String(error) };
    }
}
class Repository {
    items = [];
    // add function
    add(item) {
        this.items.push(item);
    }
    // find expense
    find(id) {
        return this.items.find(it => it.id === id);
    }
    // delete expense
    delete(id) {
        const index = this.items.findIndex(item => item.id === id);
        if (index === -1)
            return false;
        this.items.splice(index, 1);
        return true;
    }
    getALL() {
        return this.items;
    }
    // why Partila<T>: It makes all property optional like id?: string
    // and Object.assing merge old and new 
    update(id, updates) {
        const item = this.find(id);
        if (!item)
            return undefined;
        Object.assign(item, updates);
        return item;
    }
}
const expenseRepo = new Repository();
expenseRepo.add({
    id: "01",
    description: "Coffee",
    amount: 250,
    category: "Food"
});
expenseRepo.add({
    id: "02",
    description: "Bus ticket",
    amount: 500,
    category: "Transport"
});
console.log(apiResponse(() => expenseRepo.find("01")));
console.log(apiResponse(() => expenseRepo.getALL()));
console.log("--------update item--------");
expenseRepo.update("02", { description: "Train ticket" });
console.log(apiResponse(() => expenseRepo.getALL()));
console.log("--------------Error-------------------");
console.log(apiResponse(() => expenseRepo.find("03")));

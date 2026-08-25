// MINI PROJECT- Expense Tracker

/*
  interface: Expense
  class: Repository < T> : add, find, update, delete
  class: ApiReponse < T>
*/

interface Expense{
    id: string;
    description: string;
    amount: number;
    category: string;
}

class Repository< T extends {id:string}>{

    private items: T[] = [];

    // add function
    add(item: T): void{
        this.items.push(item)
    }

    // find expense

    find(id: string): T | undefined{
       return this.items.find(it => it.id === id);
    }

    // delete expense
    delete(id: string): boolean {
      const index = this.items.findIndex(item => item.id === id);
      if (index === -1) return false;
      this.items.splice(index, 1);
      return true;
    }

    getALL():T[]{
        return  this.items;
    }

    // why Partila<T>: It makes all property optional like id?: string
    // and Object.assing merge old and new 

    update(id: string, updates: Partial<T>): T | undefined{
        const item = this.find(id);
        if(!item)  return undefined;

        Object.assign(item, updates);
        return item;
    }

}

const expenseRepo = new Repository<Expense>();

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

console.log(expenseRepo.find("01"));

console.log(expenseRepo.getALL());

console.log("--------update item--------");
expenseRepo.update("02", {description: "Train ticket"});
console.log(expenseRepo.getALL());











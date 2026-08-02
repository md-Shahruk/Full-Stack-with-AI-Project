// Product Inventory
let store = [];
let idincr = 1;

function addProduct(name, price, stock){
    const product = {
        id: idincr ++,
        name: name,
        price: price,
        stock: stock 
    }
    store.push(product);
    return product;
}

function searchbyId(id){
    return store.find(f => f.id === id) || null;
}

function findExpensiveProduct(amount){
   return store.filter(f => f.price > amount);
}

function totalInventoryValue(){
  return store.reduce((total, prduct)=>{
    return total + (prduct.price * prduct.stock);
  },0);
    
}

function sortByPrice(){
    const sorted = [...store];
    return sorted.sort((a,b)=> b.price - a.price);
}

function findOutOfStock(){
    return store.filter(p => p.stock === 0);
}

// Display function for pretty output
function displayProducts(s = store) {
    console.log("Product List");
    if (s.length === 0) {
        return;
    }
    s.forEach(p => {
        console.log(`ID: ${p.id}  ${p.name}  $${p.price.toFixed(2)}  Stock: ${p.stock}`);
    });
    console.log("---------------");
}


console.log("Adding Products");
addProduct("Laptop", 999, 15);
addProduct("Mouse", 29, 0);
addProduct("Keyboard", 79, 8);
addProduct("Monitor", 299, 0);
addProduct("USB Cable", 12, 50);

displayProducts();


console.log("Search by ID:");
const found = searchbyId(3);
if (found) {
    console.log(`Found: ${found.name} - $${found.price} (Stock: ${found.stock})`);
} else {
    console.log("Product not found");
}
console.log();


console.log("Expensive product more than 100:");

const expensive =  findExpensiveProduct(100);
displayProducts(expensive);


console.log("Total Inventory Value:");
const totalValue = totalInventoryValue();

console.log(totalValue);
console.log(" Products sorted by price high to low:");
const s = sortByPrice();
displayProducts(s);


console.log("Find out of stock:");
const outofstock = findOutOfStock();
console.log(outofstock);


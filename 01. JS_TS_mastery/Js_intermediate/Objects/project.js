// Library Management
let libraryStore = [];
function addBook(title, author, availabel){
        const book = {
            title: title,
            author: author,
            availabel: availabel

        }
        libraryStore.push(book);
}

function removeBook(title){
    let newstore;
    newstore = libraryStore.filter( b => b.title !== title);

    libraryStore = newstore;
   
}

function findBook(title){
    return libraryStore.some(b => b.title === title);
}

function totalBooks(){
    return libraryStore.length;
}

function printAllBooks(){
    const availabelBooks = libraryStore.filter(b => b.availabel === true);
    if(availabelBooks.length === 0){
        console.log("No books available.");
        
    }else{
        console.log("Available Books:");
        availabelBooks.forEach(book =>{
            console.log(`${book.title}:${book.author}`);
            
        });
        
    }
    return availabelBooks;
}

addBook("Harry Potter", "J.K. Rowling", true);
addBook("Life of Pi", "Yann Martel", false);
addBook("The Hobbit", "J.R.R. Tolkien", true);


console.log("Find 'Life of Pi':", findBook("Life of Pi"));  
console.log("Find '1984':", findBook("1984"));  
console.log("Total books:", totalBooks());  

printAllBooks();

removeBook('Harry Potter');
console.log("After removing Harry Potter:");
printAllBooks(); 
console.log("Total books:", totalBooks());  

console.log("\nLibrary Store:", libraryStore);


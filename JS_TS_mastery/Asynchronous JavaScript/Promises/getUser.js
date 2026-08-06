const users = [
  { id: 1, name: "Shahruk", email: "shahruk@email.com", status: "active" },
  { id: 2, name: "Shatil", email: "shatil@email.com", status: "inactive" },
  { id: 3, name: "Sharif", email: "sharif@email.com", status: "active" },
];

function getUser(name){
    return new Promise((resolve, reject)=>{
        console.log(`Searching for: ${name}`);

        setTimeout(()=>{
            const foundUser = users.find(f =>
                f.name.toLowerCase() === name.toLowerCase().trim()
            );

            if(foundUser){
                resolve(foundUser);
            }else{
                reject(`Not found this user: ${name}`)
            }
        }, 2000);
        
    });
}


// getUser("Shatil")
// .then((user)=>{
//     console.log("User found");
//     console.log(`Id: ${user.id}`);
//     console.log(`Name: ${user.name}`);
//     console.log(`Email: ${user.email}`);
//     console.log(`Status: ${user.status}`);   
    
// })
// .catch((error)=>{
//     console.log(error);
    
// })
// .finally(()=>{
//     console.log("Search completed.");
    
// })


// Make it more intereacive 
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askName(){
    readline.question(
        `\n Enter name or quit:`,
        (name)=>{
            if(name.toLowerCase() === 'quit'){
                readline.close();
                return;
            }

            getUser(name)
            .then((user)=>{
                console.log("User found");
                console.log(`Id: ${user.id}`);
                console.log(`Name: ${user.name}`);
                console.log(`Email: ${user.email}`);
                console.log(`Status: ${user.status}`);   
                
            })
            .catch((error)=>{
                console.log(error);
                
            })
            .finally(()=>{
                askName();
                
            });
        }
    );
}

askName();
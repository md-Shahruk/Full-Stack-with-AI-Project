

const users = [
  { id: 1, name: "Shahruk", email: "shahruk@email.com", status: "active" },
  { id: 2, name: "Shatil", email: "shatil@email.com", status: "inactive" },
  { id: 3, name: "Sharif", email: "sharif@email.com", status: "active" },
];

function getUser(name) {
  return new Promise((resolve, reject) => {
    console.log(`Searching for: ${name}`);

    setTimeout(() => {
      const founduser = users.find(
        f => f.name.toLowerCase() === name.toLowerCase().trim()
      );
      if (founduser) {
        resolve(founduser);
      } else {
        reject("User can't found...");
      }
    }, 2000);
  });
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

async function userInfo() {
  readline.question(`\nEnter name or type 'quit' to exit: `, async (name) => {
  
    
    if (name.toLowerCase() === 'quit') {
      readline.close();
      return;
    }

    try {
      const info = await getUser(name);
      console.log("User found:", info);
      console.log(`Id: ${info.id}`);
      console.log(`Name: ${info.name}`);
      console.log(`Email: ${info.email}`);
      console.log(`Status: ${info.status}`);
      
      
      userInfo(); 
      
    } catch (err) {
      console.log(`Error: ${err}`); 
      userInfo(); 
    }
  });
}

userInfo();
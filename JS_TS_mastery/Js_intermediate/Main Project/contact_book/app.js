// Project: Contact book
import fs from 'fs';


function readContacts(){
    try{
        const data = fs.readFileSync("contacts.json", "utf-8");
        return JSON.parse(data);
    }catch(error){
        fs.writeFileSync("contacts.json", JSON.stringify([]));
        return [];
    }
}

function saveContacts(contacts){
    fs.writeFileSync("contacts.json", JSON.stringify(contacts));
}

const command = process.argv[2];

// add contacts
if(command === "add"){
    const name = process.argv[3];
    const phone = process.argv[4];
    const email = process.argv[5];

    if(!name || !phone || !email){
        console.log("Add name, phone, email");
        process.exit(1);
        
    }

    const contacts = readContacts();
    let newId;
    if(contacts.length === 0){
        newId = 1;
    }else{
        const ids = contacts.map(c => c.id);
        const maxId = Math.max(...ids);
        newId = maxId + 1;

    }

    const newContact = {
        id: newId,
        name: name,
        phone: phone,
        email: email
    }

    contacts.push(newContact);

    saveContacts(contacts);

    console.log("Contact add successfully.");
    
}

// contacts list

if(command === "list"){
    
    const contacts = readContacts();
    contacts.forEach(l =>{
        console.log(`ID: ${l.id}`);
        console.log(`Name: ${l.name}`);
        console.log(`Phone: ${l.phone}`);
        console.log(`Email: ${l.email}`);
 
    });
}

// search contact

if(command === "search"){
    const searchT = process.argv[3];

    const contacts = readContacts();

    const results = contacts.filter( c =>{
        const nameMatch = c.name && c.name.toLowerCase().includes(searchT.toLowerCase());
         const phoneMatch = c.phone && c.phone.includes(searchT); 
         const emailMatch = c.email && c.email.toLowerCase().includes(searchT.toLowerCase());

         return nameMatch || phoneMatch || emailMatch;
    });

    if(results.length === 0){
        console.log("no contacts found");
        
    }else{
        results.forEach(l => {
            console.log(`ID: ${l.id}`);
            console.log(`Name: ${l.name}`);
            console.log(`Phone: ${l.phone}`);
            console.log(`Email: ${l.email}`);
        });
    }
}

// delete contacts

if(command === "delete"){
    const deleteId = parseInt(process.argv[3]);
    const contacts = readContacts();

    const contactIndex = contacts.findIndex(f=> f.id === deleteId);

    if( contactIndex === -1){
        console.log("No contacts found.");
        
    }else{
        const deleteContact = contacts[contactIndex];
        contacts.splice(contactIndex, 1);
        saveContacts(contacts);

        console.log("Contact delete successfully.");
        console.log(`Id: ${deleteContact.id}`);
        console.log(`Name: ${deleteContact.name}`);    
        
    }


}
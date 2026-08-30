import fs from 'fs';

const data = fs.readFileSync("notes.json", "utf-8");
const notes = JSON.parse(data);

const command = process.argv[2];
//add note
if(command === "add"){
   const newNote = process.argv[3];
   notes.push(newNote);

   fs.writeFileSync("notes.json", JSON.stringify(notes));
   console.log("Note added");
   
}

// list notes
if(command === "list"){
    notes.forEach((item,index)=>{
        console.log(`${index}: ${item}`);
        
    });
}

// delete notes
if(command === "delete"){
    const index = Number(process.argv[3]);
    notes.splice(index, 1);

    fs.writeFileSync("notes.json", JSON.stringify(notes));
    console.log("Note deleted");
    
}

/*
fs module:
fs lets us:
- read file
- edit file
- create file
- delete file

Inside json file this is not array it's a text.
To convert text into a real js object/array use JSON.parse()

And a file store text to need to convert into text. JSON.stringify()
And write data into file fs.writeFileSync()
*/

// import { log } from "console";
// import fs from "fs";

const notes = ["Buy milk", "Study"];

fs.writeFileSync("notes.json", JSON.stringify(notes));

const data = fs.readFileSync("notes.json", "utf8");
//console.log(data);// string data
//console.log(JSON.parse(data));// array data 

console.log(process.argv[2]);




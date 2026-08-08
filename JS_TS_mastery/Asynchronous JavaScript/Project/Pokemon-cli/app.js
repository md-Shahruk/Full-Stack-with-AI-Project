
import readline from 'readline';

import { divider, titleName,listOfabilities, nameUpper } from "./utils.js";
import { getPokemon } from "./pokemon.js";
import { stdin, stdout } from 'process';
import { log } from 'console';


const rl = readline.createInterface({
    input: stdin,
    output: stdout

});

const question = (prompt)=> new Promise((resolve)=>{

    rl.question(prompt, resolve);
});

async function main(){
    
    while(true){
        const name = await question("Enter pokemono name or quit:");
        if(name === "quit"){
            rl.close();
            break;
        }else{
         try{
        
        const data = await getPokemon(name);
        displayPokemon(data);
        
        
    }catch(error){
      switch(error.message){
        case "Pokemon_not_found":
            console.log("Pokemon not found");
            break;
        case "APi_error":
            log("Api error");
            break;
        default:
            console.log("Network error...");

      }
    }
        }
    }
   
    
}

function displayPokemon(data){
    titleName("Pokemon information");

        console.log(`Name: ${nameUpper(data.name)}`);
        console.log(`Height: ${data.height}`);
        console.log(`Weight: ${data.weight}`);
        console.log(`Abilities: ${listOfabilities(data.abilities)}`);

        divider();
}

main();
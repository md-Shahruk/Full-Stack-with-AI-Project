/*
 Sequential: do task 1, wait for complete task 1, then do task 2 wait for complete task 2
 Parallel: Start task 1, task1, task3 and wait for all of them to finish together.

 Which one is good let's see?
*/

// pikachu, bulbasaur, charmander


async function fetchPokemon(name){
   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
   return await res.json();
}

async function sequential(){
    console.log("Sequential");
    console.time("Time start");

    const pikachu = await fetchPokemon("pikachu");
    console.log(`Got: ${pikachu.name}`);

    const bulbasaur = await fetchPokemon("bulbasaur");
    console.log(`Got: ${bulbasaur.name}`);

    const charmander = await fetchPokemon("charmander");
    console.log(`Got: ${charmander.name}`);

    console.timeEnd("Time start");
    
}

async function parallel(){
    console.log("Parallel");
    console.time("Parallel start");

    const result = await Promise.all([fetchPokemon('pikachu'), fetchPokemon('bulbasaur'), fetchPokemon('charmander')]);

    result.forEach(pok =>{
        console.log(`Got:${pok.name}`);
        
    });

    console.timeEnd("Parallel start");
    
}


async function main() {
   await sequential();
   await parallel();
}

main();

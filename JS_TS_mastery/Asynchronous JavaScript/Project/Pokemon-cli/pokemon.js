
// API call

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemon(name){
    const res = await fetch(`${baseUrl}/${name.toLowerCase()}`);
    if(!res.ok){
        if (res.status === "404"){
            throw new Error("Pokemon_not_found");
        }
        throw new Error("APi_error");
    }
    return await res.json();
}




export function divider(){
    console.log("---------------------");
    
}

export function titleName(title){
    divider();
    console.log(title);
    divider();

}

export function listOfabilities(abilities){
    return abilities.map(mp => mp.ability.name).join(",");
}

export function nameUpper(w){
    return w.charAt(0).toUpperCase() + w.slice(1);
}
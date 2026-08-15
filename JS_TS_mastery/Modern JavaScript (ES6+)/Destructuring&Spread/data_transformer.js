// Mini Project — Data Transformer



/*
Build functions that:
 - Rename a user
 - Add a property
 - Remove a property
 - Create a modified copy
 - Extract only selected information

*/
const users = [
    {
        name: "Rahim",
        age: 22,
        role: "developer"
    },
    {
        name: "Karim",
        age: 25,
        role: "designer"
    }
];

function renameUser(user, newName){

    const rename = {
        ...user,
        name: newName
    }
    return rename;

}

function addProperty(user, key, value){

    const newProperty = {
        ...user,
        [key]: value
    }

    return newProperty;
    
}

function removeProperty(user, re){
   
    const {[re]: rem, ...rest} = user;
    return rest;

}

function modifiedCopy(user, updateuser){
    return {
        ...user,
        ...updateuser
    }
}

function extractSelectedArea(user, selectedKey){
   const  res = {};
    for(const key of selectedKey){
        res[key] = user[key];
    }

    return res;
}



console.log(renameUser(users[0], "Abdul")); 

console.log(addProperty(users[0], "city", "Dhaka")); 

console.log(removeProperty(users[0], "role")); 


console.log(modifiedCopy(users[0], { 
    age: 23, 
    role: "senior developer" 
})); 

console.log(extractSelectedArea(users[0], ['name', 'role']));













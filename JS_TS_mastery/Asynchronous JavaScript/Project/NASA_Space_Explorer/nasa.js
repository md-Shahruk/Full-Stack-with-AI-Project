
const API_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = 'gwqGMYUBPPOBDLTbg5QYWSvbA6a2hLyoJOVfYrR1';

export async function getNaSa(){
    try{

        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);

        if(!res.ok){
            throw new Error('Someting_wrong');
        }
    return await res.json();

    }catch(error){
         console.log("Error", error.message);
         
    }
}


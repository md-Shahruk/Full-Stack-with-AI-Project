
const API_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = 'gwqGMYUBPPOBDLTbg5QYWSvbA6a2hLyoJOVfYrR1';

export async function getNaSa(date = null){
    try{

        let url = `${API_URL}?api_key=${API_KEY}`;

        if(date){
            url += `&date=${date}`;
        }

        const res = await fetch(url);

        if(!res.ok){
            throw new Error('Someting_wrong');
        }
    return await res.json();

    }catch(error){
         console.log("Error", error.message);
         throw error;
         
    }
}


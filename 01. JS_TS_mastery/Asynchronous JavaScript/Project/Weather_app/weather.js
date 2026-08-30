

import { config } from "./config.js";



const Api_key = config.API_KEY;

export async function getWeatherdata(city){ 
    try{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.toLowerCase()}&appid=${Api_key}&units=metric`);

        if(!res.ok){
           const statusMessage = {
            401: 'Invalid api key',
            404: `City ${city} not found.`,
            429: 'To many request.'
           };
           const message = statusMessage[res.status] || `Error ${res.status}: Something went wrong. `;
           throw new Error(message);
        }
        return await res.json();


    }catch(error){
       console.log('Error:', error.message);
         throw error;
    }

}
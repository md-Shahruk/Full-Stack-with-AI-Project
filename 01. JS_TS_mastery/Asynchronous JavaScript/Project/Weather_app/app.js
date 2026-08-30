
import { stdin, stdout } from "process";
import { getWeatherdata } from "./weather.js";
import readline from 'readline';



const rl = readline.createInterface({
    input: stdin,
    output: stdout
});

const question = (prompt)=> new Promise((resovle)=>{
    rl.question(prompt, resovle);
})

async function getWeather(){
    const city = await question("Enter city:");

    try{
        const data = await getWeatherdata(city);
        
        console.log(`Weather in ${city}:`);
        console.log(`Temperature: ${data.main.temp}°C`);
        console.log(`Feels like: ${data.main.feels_like}°C`);
        console.log(`Humidity: ${data.main.humidity}%`);
        console.log(`Weather: ${data.weather[0].description}`);
        console.log(`Wind speed: ${data.wind.speed} m/s`);
        
        
        return data;
        

    }catch(error){
      console.error('Failed to get weathre:', error.message);
      return null;
    }
}

getWeather();
// problem
interface Config{
    apiUrl?: string;
    timeOut?: number;
}

// if need ensure all properties are provided

function validConfig(config: Required<Config>){
    console.log(config.apiUrl);
    console.log(config.timeOut);
    return true;
}

validConfig({
    apiUrl:"https://api.shahruk.com",
    timeOut: 500,
})
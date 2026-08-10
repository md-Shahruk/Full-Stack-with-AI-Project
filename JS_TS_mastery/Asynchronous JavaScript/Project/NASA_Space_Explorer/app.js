import { getNaSa } from "./nasa.js";

const imageTitle = document.getElementById("imageName");
const imgeDate = document.getElementById("imageDate");
const explanation = document.getElementById("imageExplanation");
const imageNasa = document.getElementById("nasaImage");


async function nasaImageViewer(){
    try{
        const nasa = await getNaSa();
        imageTitle.textContent = nasa.title;
        imgeDate.textContent = nasa.date;
        explanation.textContent = nasa.explanation;
        imageNasa.src = nasa.url;

    }catch{
       console.error('nasa image loading:', error);
    }

}

nasaImageViewer();


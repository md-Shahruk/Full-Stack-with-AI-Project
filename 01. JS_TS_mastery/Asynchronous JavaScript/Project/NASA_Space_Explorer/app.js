import { getNaSa } from "./nasa.js";

const imageTitle = document.getElementById("imageName");
const imgeDate = document.getElementById("imageDate");
const explanation = document.getElementById("imageExplanation");
const imageNasa = document.getElementById("nasaImage");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const loader = document.getElementById("loader");
const imageWrapper = document.querySelector(".image-wrapper");

let currentDate = null;

// make loading function

function showLoading() {
  loader.style.display = "block";
  imageWrapper.classList.add("loading");

  prevBtn.disabled = true;
  nextBtn.disabled = true;
}

// after loading

function hideLoading() {
  loader.style.display = "none";
  imageWrapper.classList.remove("loading");

  prevBtn.disabled = false;
  nextBtn.disabled = false;
}

async function nasaImageViewer(date = null) {
  try {
    showLoading();
    const nasa = await getNaSa(date);
    currentDate = nasa.date;

    nasaData(nasa);
  } catch(error) {
    console.error("nasa image loading:", error);
  }finally{
    hideLoading();
  }
}


function nasaData(nasa) {
  imageTitle.textContent = nasa.title;
  imgeDate.textContent = nasa.date;
  explanation.textContent = nasa.explanation;
  imageNasa.src = nasa.url;
}




// now previous button functionality

function getPreviousDate(dateString){
    const date = new Date(dateString); // string convert to date
    date.setDate(date.getDate()- 1); // .getDate() - day
    return date.toISOString().split("T")[0];
}

prevBtn.addEventListener('click', ()=>{
    const previousDate = getPreviousDate(currentDate);
     nasaImageViewer(previousDate);
});

// now next button functionallity

function getNextDate(dateString){
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1);
    return date.toISOString().split("T")[0];
}


nextBtn.addEventListener('click', ()=>{
    const nextDate = getNextDate(currentDate);
    nasaImageViewer(nextDate);
})

nasaImageViewer();
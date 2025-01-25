const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear()

let lastModif = new Date(document.lastModified); 

lastModified.innerHTML = `Last Modified: ${lastModif}`;

const temp = document.querySelector('#temp');
const wind = document.querySelector('#wind');

let tempAsNum = Number(temp.textContent);
let windAsNum = Number(wind.textContent);

const windChill = function(temp,wind){
    if (temp <= 10 && wind >= 4.8){
        let windChillCalc = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind,0.16)) + (0.3965 * temp * Math.pow(wind,0.16));
        return `${windChillCalc.toFixed(2)} °C`;
    }
    else{
        return 'N/A';
    }
}

document.querySelector('#windChill').innerHTML = windChill(tempAsNum,windAsNum);
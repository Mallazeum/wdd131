const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear()

let lastModif = new Date(document.lastModified); 

lastModified.innerHTML = `Last Modified: ${lastModif}`;

let count = localStorage.getItem('pageLoadCount');

if (!count) {
    count = 0
}

count = parseInt(count) + 1;

localStorage.setItem('pageLoadCount',count);

const counter = document.getElementById('counter');

counter.innerHTML = `There have been ${count} user reviews submited`;
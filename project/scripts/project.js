const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear()

let lastModif = new Date(document.lastModified); 

lastModified.innerHTML = `Last Modified: ${lastModif}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page reload

    // Get user input values
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let room = document.querySelector('input[name="room"]:checked').value;
    let date = document.getElementById("reserveDate").value;

    let printedText = document.createElement('section');

    printedText.innerHTML = `
        <p><strong>Name:</strong> ${fName} ${lName}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Room:</strong> ${room}</p>
        <p>Thanks for Your Reservation!</p>
    `;

    const output = document.getElementById('output');

    output.appendChild(printedText);
    // Optional: Clear the form after submission
    this.reset();
});
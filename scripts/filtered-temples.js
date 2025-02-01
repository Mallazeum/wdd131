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


const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Vernal Utah",
		location: "Vernal, Utah, United States",
		dedicated: "1997, November, 2",
		area: 38771,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/vernal-utah-temple/vernal-utah-temple-40521-main.jpg"
	},
	{
		templeName: "Tokyo Japan",
		location: "Tokyo, Japan",
		dedicated: "1980, October, 27",
		area: 53997,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
	},
	{
		templeName: "London England",
		location: "London, England",
		dedicated: "1958, September, 7",
		area: 42652,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-4243-main.jpg"
	}
];

const templeElement = document.getElementById('templeArray')

function displayTemples(category){
	templeElement.innerHTML = '';
	const filteredTemple = [];
	if (category === 'old'){
		temples.forEach(function(temple){
			const dedicated = temple.dedicated;
			const parts = dedicated.split(',');
			const year = parseInt(parts[0].trim())
			if(year < 1900){
				filteredTemple.push(temple)
			}
		})
	}
	else if (category === 'new'){
		temples.forEach(function(temple){
			const dedicated = temple.dedicated;
			const parts = dedicated.split(',');
			const year = parseInt(parts[0].trim())
			if(year > 2000){
				filteredTemple.push(temple)
			}
		})
	}
	else if (category === 'large'){
		temples.forEach(function(temple){
			const area = temple.area;
			if(area > 90000){
				filteredTemple.push(temple);
			}
		})
	}
	else if (category === 'small'){
		temples.forEach(function(temple){
			const area = temple.area;
			if(area < 10000){
				filteredTemple.push(temple);
			}
		})
	}
	else {
		temples.forEach(function(temple){
			filteredTemple.push(temple);
		})
	}

	filteredTemple.forEach(function(temple){
		const figureItem = document.createElement('figure');
	
		const imageElement = document.createElement('img');
		imageElement.src = temple.imageUrl;
		imageElement.alt = temple.templeName;
		imageElement.loading = "lazy";
	
		const figCaptElement = document.createElement('figcaption');
		figCaptElement.innerHTML = `${temple.templeName} <br>Location: ${temple.location} <br>Dedicated: ${temple.dedicated} <br>Area: ${temple.area}`;
	
		figureItem.appendChild(imageElement);
		figureItem.appendChild(figCaptElement);
	
		templeElement.appendChild(figureItem);
	})
}

displayTemples();

const links = document.querySelectorAll("a");

links.forEach(link => {
	link.addEventListener("click", function(event) {
		event.preventDefault(); // Prevent default navigation behavior if needed
		displayTemples(this.id)
		// Remove 'active' class from all links
		links.forEach(link => link.classList.remove("active"));

		// Add 'active' class to the clicked link
		this.classList.add("active");
	});
});

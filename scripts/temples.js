const year = document.querySelector("#year")
let lastModification = document.querySelector("#lastMod")

const today = new Date();
let last = new Date(document.lastModified);

year.innerHTML = `©${today.getFullYear()} | Helaman Franco | Ecuador`;


lastMod.innerHTML = `Last Modification: ${last}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
})

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
    templeName: "Guayaquil Ecuador",
    location: "Guayaquil, Ecuador",
    dedicated: "1999, August, 1",
    area: 45000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/058-Guayaquil-Ecuador-Temple.jpg"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
  },
  {
    templeName: "Quito Ecuador",
    location: "Quito, Ecuador",
    dedicated: "2022, Novemeber, 20",
    area: 7864,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/quito-ecuador-temple/quito-ecuador-temple-31202-main.jpg"
  }
];

const main = document.querySelector("main");



const navLinks = document.querySelectorAll("nav ul li a");

function displayTemples(templeArray) {
    main.innerHTML = "";
    
    templeArray.forEach((temple) => {

    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = ` 
    <h2>${temple.templeName}</h2>
    <p><span class="first-word">Location:</span> ${temple.location}</p>
    <p><span class="first-word">Dedicated:</span> ${temple.dedicated}</p>
    <p><span class="first-word">Size:</span> ${temple.area} sq ft</p>
    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    main.appendChild(card);
});
}

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        
        const category = link.textContent;

        let filteredTemples = temples;

        if (category === "Old") {
            filteredTemples = temples.filter(t => {
                const year = new Date(t.dedicated).getFullYear();
                return year < 1900;
            });
        } else if (category === "New") {
            filteredTemples = temples.filter(t => {
                const year = new Date(t.dedicated).getFullYear();
                return year >= 2000;
            });
        } else if (category === "Large") {
            filteredTemples = temples.filter(t => t.area > 90000);
        } else if (category === "Small") {
            filteredTemples = temples.filter(t => t.area < 10000);
        }

        displayTemples(filteredTemples);
    });
})

displayTemples(temples)

const year = document.querySelector("#year")
let lastModification = document.querySelector("#lastMod")

const today = new Date();
let last = new Date(document.lastModified);

year.innerHTML = `©${today.getFullYear()} | Helaman Franco | Ecuador`;


lastMod.innerHTML = `Last Modification: ${last}`;

let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

document.querySelector("#reviewCounter").textContent = reviewCount;


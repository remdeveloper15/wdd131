const year = document.querySelector("#year")
let lastModification = document.querySelector("#lastMod")

const today = new Date();
let last = new Date(document.lastModified);

year.innerHTML = `©${today.getFullYear()} 👹 Helaman Franco 👹 Ecuador`;


lastMod.innerHTML = `Last Modification: ${last}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
})
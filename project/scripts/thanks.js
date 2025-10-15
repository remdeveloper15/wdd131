// ==========================
// HAMBURGER MENU
// ==========================
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// ==========================
// DYNAMIC FOOTER
// ==========================
const year = document.querySelector("#year");
const lastMod = document.querySelector("#lastMod");

const today = new Date();
const last = new Date(document.lastModified);

year.innerHTML = `©${today.getFullYear()} | HELAMAN FRANCO | ECUADOR`;
lastMod.innerHTML = `LAST MODIFICATION: ${last.toLocaleString()}`;

const year = document.querySelector("#currentyear")
let lastModification = document.querySelector("#lastModified")

const today = new Date();1
let last = new Date(document.lastModified);

year.innerHTML = `©${today.getFullYear()} 🪼 Helaman Franco 🪼 Ecuador`;


lastModification.innerHTML = `Last Modification: ${last}`;
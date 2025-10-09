const year = document.querySelector("#year")
let lastModification = document.querySelector("#lastMod")

const today = new Date();
let last = new Date(document.lastModified);

year.innerHTML = `©${today.getFullYear()} | Helaman Franco | Ecuador`;


lastMod.innerHTML = `Last Modification: ${last}`;


const products = [
    {
        id:"fc-1888",
        name: "Flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp equalizer",
        averagerating: 5.0
    }
];

const productSelect = document.querySelector("#product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name
    productSelect.appendChild(option);
});


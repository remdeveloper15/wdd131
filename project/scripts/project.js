// Menú hamburguesa
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

// Footer info
const year = document.querySelector("#year");
const lastMod = document.querySelector("#lastMod");

const today = new Date();
let last = new Date(document.lastModified);

year.innerHTML = `©${today.getFullYear()} | HELAMAN FRANCO | ECUADOR`;
lastMod.innerHTML = `Last Modification: ${last}`;

// 🟢 NUEVO: Hero dinámico según hora de Ecuador
const hero = document.getElementById("hero");
const heroText = document.getElementById("heroText");

// Rutas de imágenes (deben coincidir con las que cargaste con lazy)
const heroImages = [
    "images/imagen1.webp", // madrugada
    "images/imagen2.webp", // mañana
    "images/imagen3.webp", // tarde
    "images/imagen4.webp"  // noche
];

// Textos correspondientes
const heroTexts = [
    "A peaceful dawn over San José de Ancón.",
    "A bright morning to start your day in Ancón.",
    "The sun warms our land in the afternoon.",
    "A calm and starry night in San José de Ancón."
];

// Obtener hora local de Ecuador (UTC-5)
const ecuadorTime = new Date().toLocaleString("en-US", { timeZone: "America/Guayaquil" });
const currentHour = new Date(ecuadorTime).getHours();

let index;

// 🕐 Seleccionar imagen según la hora
if (currentHour >= 0 && currentHour < 6) {
    index = 0; // madrugada
} else if (currentHour >= 6 && currentHour < 12) {
    index = 1; // mañana
} else if (currentHour >= 12 && currentHour < 18) {
    index = 2; // tarde
} else {
    index = 3; // noche
}

// 🖼️ Aplicar fondo y texto
hero.style.backgroundImage = `url('${heroImages[index]}')`;
heroText.textContent = heroTexts[index];

// Imágenes para escritorio
const heroImagesDesktop = [
    "images/imagen1.webp", // madrugada
    "images/imagen2.webp", // mañana
    "images/imagen3.webp", // tarde
    "images/imagen4.webp"  // noche
];

// Imágenes para móvil
const heroImagesMobile = [
    "images/imagen5.webp", // madrugada
    "images/imagen6.webp", // mañana
    "images/imagen7.webp", // tarde
    "images/imagen8.webp"  // noche
];

// Selección por pantalla
const isMobile = window.innerWidth < 1000;

// Aplicar fondo y texto según dispositivo
hero.style.backgroundImage = `url('${isMobile ? heroImagesMobile[index] : heroImagesDesktop[index]}')`;
heroText.textContent = heroTexts[index];

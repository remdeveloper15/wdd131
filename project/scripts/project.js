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

// ==========================
// HERO BY HOUR AND DISPOSITIVE
// ==========================
const hero = document.getElementById("hero");
const heroText = document.getElementById("heroText");

// DESKTOP IMAGES
const heroImagesDesktop = [
    "images/imagen1.webp", // madrugada
    "images/imagen2.webp", // mañana
    "images/imagen3.webp", // tarde
    "images/imagen4.webp"  // noche
];

// MOBILE IMAGESAA
const heroImagesMobile = [
    "images/imagen5.webp",
    "images/imagen6.webp",
    "images/imagen7.webp",
    "images/imagen8.webp"
];

// TEXTS BY HOURS
const heroTexts = [
    "A peaceful dawn over San José de Ancón.",
    "A bright morning to start your day in Ancón.",
    "The sun warms our land in the afternoon.",
    "A calm and starry night in San José de Ancón."
];

// INDEX BY ECUADOR TIME
function getTimeIndex() {
    const ecuadorTime = new Date().toLocaleString("en-US", { timeZone: "America/Guayaquil" });
    const hour = new Date(ecuadorTime).getHours();

    if (hour < 6) return 0;    // madrugada
    if (hour < 12) return 1;   // mañana
    if (hour < 18) return 2;   // tarde
    return 3;                  // noche
}

// 🔹 Cambia la imagen del hero según ancho y hora
function updateHero() {
    const index = getTimeIndex();
    const isMobile = window.innerWidth < 1000;
    const selectedImage = isMobile ? heroImagesMobile[index] : heroImagesDesktop[index];
    
    hero.style.backgroundImage = `url('${selectedImage}')`;
    heroText.textContent = heroTexts[index];
}

// Ejecutar al cargar y al cambiar tamaño
updateHero();
window.addEventListener("resize", updateHero);

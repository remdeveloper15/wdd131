const year = document.querySelector("#currentyear")
let lastModification = document.querySelector("#lastModified")

const today = new Date();1
let last = new Date(document.lastModified);

year.innerHTML = `©${today.getFullYear()} 🪼 Helaman Franco 🪼 Ecuador`;

lastModification.innerHTML = `Last Modification: ${last}`;

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".lazy-img");

  const options = {
    threshold: 0.1 // se activa cuando al menos 10% de la imagen está visible
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        obs.unobserve(entry.target); // deja de observar esa imagen (optimiza)
      }
    });
  }, options);

  images.forEach(img => observer.observe(img));
});

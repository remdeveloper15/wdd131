document.addEventListener("DOMContentLoaded", () => {
    const countryData = {
        area: "377,975 km²",
        population: "125.7 million",
        capital: "Tokyo",
        languages: "Japanese",
        currency: "Japanese Yen (JPY)",
        time: "UTC+9 (JST)",
        calling: "+81",
        internet: ".jp"
    };

    const weatherData = {
        temp: "22°C",
        conditions: "Sunny",
        wind: "15km/h",
        wchill: ""
    };

    function fillInputs(data) {
        for (const key in data) {
            const input = document.getElementById(key);
            if (input) input.value = data[key];
        }
    }

    function calculateWindChill(tempC, windKmh) {
        return Math.round(
            13.12 + 0.6215 * tempC - 11.7 * Math.pow(windKmh, 0.16) + 0.3965 * tempC *Math.pow(windKmh, 0.16)
        );
    }

    const tempC = parseFloat(weatherData.temp);
    const windKmh = parseFloat(weatherData.wind);

    if (tempC <= 10 && windKmh > 4.8) {
        weatherData.wchill = calculateWindChill(tempC, windKmh) + "°C";
    }
    else {
        weatherData.wchill = "N/A";
    }
    
    fillInputs(countryData);
    fillInputs(weatherData);

})



const year = document.querySelector("#currentyear")
let lastModification = document.querySelector("#lastModified")

const today = new Date();1
let last = new Date(document.lastModified);

year.innerHTML = `©${today.getFullYear()} 🪼 Helaman Franco 🪼 Ecuador`;

lastModification.innerHTML = `Last Modification: ${last}`;


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
// FORM FUNCTIONALITY
// ==========================

// ✅ GET THE FORM ELEMENT
const form = document.querySelector("form");

// ✅ LISTEN FOR THE SUBMIT EVENT
form.addEventListener("submit", (event) => {
    // PREVENT DEFAULT BEHAVIOR
    event.preventDefault();

    // ✅ CREATE AN OBJECT WITH USER DATA
    const userData = {
        subject: document.querySelector("#subject").value,
        firstName: document.querySelectorAll("input[name='name']")[0].value,
        lastName: document.querySelectorAll("input[name='name']")[1].value,
        phone: document.querySelector("#phone").value,
        email: document.querySelector("input[type='email']").value,
        date: document.querySelector("#date").value,
        letter: document.querySelector("#letter").value
    };

    // ✅ GET EXISTING ARRAY FROM LOCAL STORAGE (IF ANY)
    let storedData = JSON.parse(localStorage.getItem("formDataArray")) || [];

    // ✅ ADD NEW OBJECT TO THE ARRAY
    storedData.push(userData);

    // ✅ SAVE UPDATED ARRAY BACK TO LOCAL STORAGE
    localStorage.setItem("formDataArray", JSON.stringify(storedData));

    // ✅ LOG TO VERIFY
    console.log("DATA SAVED TO ARRAY:", storedData);

    // ✅ CONTINUE TO THE CONFIRMATION PAGE
    form.submit();
});


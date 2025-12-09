/* ========================
   1. PRICING TOGGLE
   ======================== */
const checkPricing = document.getElementById("check-pricing");
const amounts = document.querySelectorAll(".amount");

checkPricing.addEventListener("change", () => {
    amounts.forEach(amount => {
        // Si el checkbox está marcado (Anual)
        if (checkPricing.checked) {
            // Animación simple: poner valor anual
            amount.innerText = amount.getAttribute("data-yearly");
        } else {
            // Valor mensual
            amount.innerText = amount.getAttribute("data-monthly");
        }
    });
});

/* ========================
   2. FEATURES TABS
   ======================== */
const tabBtns = document.querySelectorAll(".tab-btn");
const tabPanes = document.querySelectorAll(".tab-pane");

tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // Quitar active de todos
        tabBtns.forEach(b => b.classList.remove("active"));
        tabPanes.forEach(p => p.classList.remove("active"));

        // Activar actual
        btn.classList.add("active");
        
        // Buscar el contenido correspondiente
        const target = btn.getAttribute("data-target"); // ej: #tab-2
        document.querySelector(target).classList.add("active");
    });
});

/* ========================
   3. MENU MOBILE
   ======================== */
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navMenu = document.getElementById("nav-menu");

if(navToggle){
    navToggle.addEventListener("click", () => navMenu.classList.add("show"));
}

if(navClose){
    navClose.addEventListener("click", () => navMenu.classList.remove("show"));
}

/* ========================
   4. FORM VALIDATION (NEWSLETTER)
   ======================== */
const emailForm = document.getElementById("email-form");
const emailInput = document.getElementById("email-input");

emailForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailValue = emailInput.value;
    // Regex simple para email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(emailValue)) {
        alert("¡Gracias por registrarte! Te enviamos el acceso a tu correo.");
        emailForm.reset();
    } else {
        alert("Por favor ingresa un correo válido.");
        emailInput.style.borderColor = "red";
    }
});

// Quitar borde rojo al escribir
emailInput.addEventListener("input", () => {
    emailInput.style.borderColor = "rgba(255,255,255,0.1)";
});
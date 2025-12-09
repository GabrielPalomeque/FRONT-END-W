// 1. Seleccionamos el botón y la lista de enlaces
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// 2. Escuchamos el clic
navToggle.addEventListener("click", function () {
    // 3. Alternamos la clase 'show-links'
    // Esto hace todo el trabajo sucio: abre o cierra.
    links.classList.toggle("show-links");
});
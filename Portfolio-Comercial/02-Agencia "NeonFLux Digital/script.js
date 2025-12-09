/* =========================================
   1. ANIMACIÓN DE SCROLL (INTERSECTION OBSERVER)
   ========================================= */
// Esta es la forma moderna de hacer animaciones al bajar
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Si el elemento es visible en pantalla
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Añadimos la clase que lo muestra
        } else {
            // (Opcional) Si quieres que desaparezca al subir de nuevo:
            // entry.target.classList.remove('show'); 
        }
    });
});

// Seleccionamos todos los elementos ocultos
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


/* =========================================
   2. NAVBAR STICKY (Efecto Vidrio al bajar)
   ========================================= */
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


/* =========================================
   3. MENÚ MÓVIL
   ========================================= */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close-menu');
// Seleccionamos también los enlaces para cerrar el menú al hacer click
const mobileLinks = document.querySelectorAll('.mobile-menu nav a');

// Abrir
hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

// Cerrar con la X
closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Cerrar al dar click en un enlace
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});
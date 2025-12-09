// 1. SIMULACIÓN DE BASE DE DATOS (Array de Objetos)
const reviews = [
    {
        id: 1,
        name: "Ana García",
        job: "Desarrolladora Web",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        text: "Me encantó trabajar con este equipo. Entregaron el proyecto a tiempo y superaron mis expectativas. Totalmente recomendados."
    },
    {
        id: 2,
        name: "Carlos Rodríguez",
        job: "Diseñador UX",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        text: "Tienen un ojo increíble para los detalles. La interfaz que diseñaron es intuitiva y moderna. Volveré a contratar sus servicios."
    },
    {
        id: 3,
        name: "Lucía Méndez",
        job: "Gerente de Marketing",
        img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        text: "Gracias a su estrategia SEO, nuestras ventas aumentaron un 200% en solo tres meses. Son unos profesionales."
    },
    {
        id: 4,
        name: "Pedro Sánchez",
        job: "CEO Tech",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
        text: "La mejor inversión que he hecho para mi startup. El código es limpio, escalable y muy rápido."
    }
];

// 2. Seleccionar elementos del HTML
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// 3. Variable de Estado (¿Qué slide estamos viendo?)
let currentItem = 0; // Empezamos por el primero (Ana)

// 4. Cargar el primer item al abrir la página
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
});

// FUNCIÓN MAESTRA: Muestra la persona basada en el número que le pases
function showPerson(personNumber) {
    const item = reviews[personNumber]; // Saca los datos del array
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// 5. Botón SIGUIENTE
nextBtn.addEventListener("click", function () {
    currentItem++; // Sumamos 1
    // Si nos pasamos del final, volvemos al principio (carrusel infinito)
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// 6. Botón ANTERIOR
prevBtn.addEventListener("click", function () {
    currentItem--; // Restamos 1
    // Si bajamos de 0, vamos al último
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// 7. Botón ALEATORIO (Extra)
randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});
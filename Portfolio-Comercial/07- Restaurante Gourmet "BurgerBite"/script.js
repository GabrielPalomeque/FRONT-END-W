/* ===========================
   1. DARK / LIGHT THEME TOGGLE
   =========================== */
const themeButton = document.getElementById('theme-toggle');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line'; // Icono cuando esté en modo oscuro

// Recuperar selección previa (si existe)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Validamos qué tema tiene el usuario
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.querySelector('i').classList.contains('ri-moon-line') ? 'ri-moon-line' : 'ri-sun-line';

// Si había algo guardado, lo aplicamos
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.querySelector('i').classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove']('ri-moon-line');
    themeButton.querySelector('i').classList[selectedIcon === 'ri-sun-line' ? 'add' : 'remove']('ri-sun-line');
}

// Activar / Desactivar manualmente
themeButton.addEventListener('click', () => {
    // Agregar/Quitar clase dark
    document.body.classList.toggle(darkTheme);
    
    // Cambiar icono
    const icon = themeButton.querySelector('i');
    if(document.body.classList.contains(darkTheme)){
        icon.classList.remove('ri-moon-line');
        icon.classList.add('ri-sun-line');
    } else {
        icon.classList.remove('ri-sun-line');
        icon.classList.add('ri-moon-line');
    }

    // Guardar en LocalStorage
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/* ===========================
   2. 3D TILT EFFECT (Matemáticas)
   =========================== */
const heroSection = document.getElementById('home');
const heroImg = document.querySelector('.hero-img');

heroSection.addEventListener('mousemove', (e) => {
    // Obtenemos ancho y alto de la ventana
    const x = (window.innerWidth / 2 - e.pageX) / 25; // Dividimos para suavizar
    const y = (window.innerHeight / 2 - e.pageY) / 25;

    // Aplicamos rotación
    heroImg.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Resetear cuando el mouse sale
heroSection.addEventListener('mouseleave', () => {
    heroImg.style.transform = `rotateY(0) rotateX(0)`;
});

/* ===========================
   3. HORIZONTAL SCROLL BUTTONS
   =========================== */
const scroller = document.getElementById('menu-scroller');
const leftBtn = document.getElementById('scroll-left');
const rightBtn = document.getElementById('scroll-right');

rightBtn.addEventListener('click', () => {
    scroller.scrollBy({ left: 300, behavior: 'smooth' });
});

leftBtn.addEventListener('click', () => {
    scroller.scrollBy({ left: -300, behavior: 'smooth' });
});

/* ===========================
   4. HEADER SHADOW ON SCROLL
   =========================== */
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
});
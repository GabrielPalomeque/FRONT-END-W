// Efecto de Navbar al hacer Scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    // Si bajamos más de 50px, agregamos sombra extra o cambiamos color
    navbar.classList.toggle('sticky', window.scrollY > 0);
});

// Nota: Puedes agregar aquí la lógica del menú hamburguesa 
// si decides implementarlo full responsive en JS.
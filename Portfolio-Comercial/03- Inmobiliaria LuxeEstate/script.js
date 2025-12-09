/* ========================
   1. NAVBAR SCROLL EFFECT
   ======================== */
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/* ========================
   2. SISTEMA DE FILTRADO
   ======================== */
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.property-card');

filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // 1. Quitar clase active de todos los botones
        filterBtns.forEach(b => b.classList.remove('active'));
        // 2. Agregar active al botón clickeado
        btn.classList.add('active');

        // 3. Obtener el valor del filtro
        const filterValue = btn.getAttribute('data-filter');

        // 4. Recorrer las tarjetas
        cards.forEach((card) => {
            if (filterValue === 'all') {
                card.classList.remove('hide');
            } else {
                if (card.getAttribute('data-category') === filterValue) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            }
        });
    });
});
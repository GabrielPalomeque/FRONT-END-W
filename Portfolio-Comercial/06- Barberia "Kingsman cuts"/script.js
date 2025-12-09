/* ========================
   1. PRELOADER
   ======================== */
window.addEventListener("load", () => {
    // Simula tiempo de carga (2 segundos) para ver la animación
    setTimeout(() => {
        const loader = document.querySelector(".loader-wrapper");
        loader.style.opacity = "0";
        // Después de que se desvanece, lo quitamos del HTML para poder hacer click
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 2000);
});

/* ========================
   2. CUSTOM CURSOR
   ======================== */
const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", (e) => {
    // Mover los círculos a donde esté el mouse
    cursor.style.cssText = cursor2.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
});

// Detectar elementos clicables para agrandar el cursor
const clickables = document.querySelectorAll("a, button, .barber-option, .service-item");

clickables.forEach(el => {
    el.addEventListener("mouseover", () => {
        cursor2.classList.add("hover-cursor");
    });
    el.addEventListener("mouseleave", () => {
        cursor2.classList.remove("hover-cursor");
    });
});

/* ========================
   3. SELECTOR DE BARBERO
   ======================== */
const barberOptions = document.querySelectorAll(".barber-option");
const hiddenInput = document.getElementById("selectedBarber");

barberOptions.forEach(option => {
    option.addEventListener("click", () => {
        // 1. Quitar 'selected' de todos
        barberOptions.forEach(op => op.classList.remove("selected"));
        
        // 2. Agregar 'selected' al clickeado
        option.classList.add("selected");
        
        // 3. Guardar el valor en el input oculto (para enviar formulario)
        const value = option.getAttribute("data-value");
        hiddenInput.value = value;
        
        console.log("Barbero seleccionado:", value);
    });
});
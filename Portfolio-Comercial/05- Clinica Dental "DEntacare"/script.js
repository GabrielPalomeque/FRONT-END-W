/* ========================
   1. ACORDEÓN (FAQ)
   ======================== */
const accordions = document.querySelectorAll('.accordion-item');

accordions.forEach(item => {
    const header = item.querySelector('.accordion-header');
    
    header.addEventListener('click', () => {
        // Cerrar los otros (Opcional, lógica exclusiva)
        accordions.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.accordion-body').style.maxHeight = 0;
            }
        });

        // Abrir/Cerrar el actual
        item.classList.toggle('active');
        const body = item.querySelector('.accordion-body');
        
        if (item.classList.contains('active')) {
            // scrollHeight te da la altura exacta del contenido
            body.style.maxHeight = body.scrollHeight + 'px';
        } else {
            body.style.maxHeight = 0;
        }
    });
});

/* ========================
   2. SIMULACIÓN FORMULARIO
   ======================== */
const form = document.getElementById('booking-form');
const successMsg = document.getElementById('success-msg');
const submitBtn = document.querySelector('.btn-submit');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita recarga
    
    // Simular estado de carga
    const originalText = submitBtn.innerText;
    submitBtn.innerText = "Enviando...";
    submitBtn.disabled = true;

    setTimeout(() => {
        // Simular éxito después de 2 segundos
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        successMsg.style.display = "block";
        form.reset(); // Limpiar inputs
        
        // Ocultar mensaje después de 5 seg
        setTimeout(() => {
            successMsg.style.display = "none";
        }, 5000);
    }, 2000);
});
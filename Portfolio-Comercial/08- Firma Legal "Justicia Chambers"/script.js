/* =====================
   1. TABS (ÁREAS DE PRÁCTICA)
   ===================== */
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover activo de todos
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Activar el clickeado
        btn.classList.add('active');
        const targetId = btn.getAttribute('data-tab');
        document.getElementById(targetId).classList.add('active');
    });
});

/* =====================
   2. FORM WIZARD (MULTI-STEP)
   ===================== */
const prevBtns = document.querySelectorAll('.btn-prev');
const nextBtns = document.querySelectorAll('.btn-next');
const formSteps = document.querySelectorAll('.form-step');
const progress = document.getElementById('progress-bar');
const form = document.getElementById('wizard-form');

let formStepsNum = 0;

function updateFormSteps() {
    // Mostrar el paso actual, ocultar los demás
    formSteps.forEach(step => {
        step.classList.contains('active') && step.classList.remove('active');
    });
    formSteps[formStepsNum].classList.add('active');

    // Actualizar barra (33%, 66%, 100%)
    const progressPercent = ((formStepsNum + 1) / 3) * 100;
    progress.style.width = progressPercent + "%";
}

nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Aquí podrías validar inputs antes de avanzar
        formStepsNum++;
        updateFormSteps();
    });
});

prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        formStepsNum--;
        updateFormSteps();
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formStepsNum++; // Ir al paso de "Éxito" (que es el índice 3)
    // El paso de éxito no está en la barra de progreso, es extra
    formSteps.forEach(step => step.classList.remove('active'));
    document.getElementById('success-step').classList.add('active');
});

/* =====================
   3. ANIMACIÓN DE NÚMEROS (COUNTUP)
   ===================== */
const statsSection = document.getElementById('counter-section');
const stats = document.querySelectorAll('.stat h3');
let started = false; // Para que solo corra una vez

window.addEventListener('scroll', () => {
    // Si la sección es visible en pantalla
    if (window.scrollY + window.innerHeight > statsSection.offsetTop && !started) {
        
        stats.forEach(stat => {
            const target = +stat.getAttribute('data-target'); // El número final
            const duration = 2000; // 2 segundos
            const increment = target / (duration / 16); // 60 FPS

            let current = 0;
            const updateCount = () => {
                current += increment;
                if (current < target) {
                    stat.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCount);
                } else {
                    stat.innerText = target + (target > 90 ? "%" : "+"); // Agregar % o + al final
                }
            };
            updateCount();
        });
        started = true;
    }
});
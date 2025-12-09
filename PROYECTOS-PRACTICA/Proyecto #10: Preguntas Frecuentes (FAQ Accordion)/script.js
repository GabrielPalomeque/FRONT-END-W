// 1. Seleccionamos todas las tarjetas de pregunta
const questions = document.querySelectorAll(".question");

// 2. Recorremos cada pregunta
questions.forEach(function (question) {
    
    // 3. Dentro de CADA pregunta, buscamos SU botón específico
    const btn = question.querySelector(".question-btn");
    
    // 4. Escuchamos el click en ESE botón
    btn.addEventListener("click", function () {
        
        // 5. (OPCIONAL) Cerrar las demás preguntas
        // Recorremos TODAS las preguntas de nuevo
        questions.forEach(function (item) {
            // Si la pregunta que revisamos (item) NO es la misma que clicamos (question)
            if (item !== question) {
                // Entonces ciérrala (quita la clase)
                item.classList.remove("show-text");
            }
        });

        // 6. Abrir o cerrar la pregunta actual
        question.classList.toggle("show-text");
    });
});
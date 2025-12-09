// 1. Inicializamos el contador en 0
let count = 0;

// 2. Seleccionamos el número y los botones del HTML
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// 3. Recorremos cada botón para ver cuál se presionó
btns.forEach(function (btn) {
  
  // Agregamos un "escucha" (Listener) para el click
  btn.addEventListener("click", function (e) {
    
    // Obtenemos las clases del botón que se presionó
    const styles = e.currentTarget.classList;

    // LÓGICA MATEMÁTICA
    if (styles.contains("decrease")) {
      count--; // Resta 1
    } else if (styles.contains("increase")) {
      count++; // Suma 1
    } else {
      count = 0; // Resetea a 0
    }

    // LÓGICA DE COLORES
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#102a42"; // Negro azulado original
    }

    // 4. Actualizamos el texto en el HTML con el nuevo valor
    value.textContent = count;
  });
});
// Seleccionamos la pantalla
const display = document.getElementById("display");

// 1. Función para agregar números u operadores a la pantalla
function appendToDisplay(input) {
    display.value += input;
}

// 2. Función para borrar todo (AC)
function clearDisplay() {
    display.value = "";
}

// 3. Función para borrar solo el último caracter (DEL)
function deleteLast() {
    // slice(0, -1) corta el string desde el inicio hasta el penúltimo caracter
    display.value = display.value.slice(0, -1);
}

// 4. Función para CALCULAR (=)
function calculate() {
    try {
        // eval() toma el texto "2+2" y lo resuelve matemáticamente
        display.value = eval(display.value);
    } catch (error) {
        // Si el usuario escribió algo loco como "5++*"
        display.value = "Error";
        
        // Borramos el mensaje de error después de 1 segundo
        setTimeout(() => {
            clearDisplay();
        }, 1500);
    }
}
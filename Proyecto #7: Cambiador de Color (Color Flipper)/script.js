// 1. Definimos los caracteres válidos en hexadecimal (0-9 y A-F)
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// 2. Seleccionamos los elementos
const btn = document.getElementById("btn");
const colorSpan = document.querySelector(".color");

// 3. Escuchamos el click
btn.addEventListener("click", function () {
    // Iniciamos la variable con el símbolo numeral
    let hexColor = "#";
    
    // Hacemos un bucle de 6 vueltas (porque los colores hex tienen 6 dígitos)
    for (let i = 0; i < 6; i++) {
        // En cada vuelta, agregamos un caracter aleatorio
        hexColor += hex[getRandomNumber()];
    }

    // 4. Aplicamos los cambios al DOM
    colorSpan.textContent = hexColor; // Cambiamos el texto
    document.body.style.backgroundColor = hexColor; // Cambiamos el fondo
});

// Función auxiliar para obtener un número aleatorio entre 0 y el largo del array 'hex'
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
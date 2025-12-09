// 1. Elementos del DOM
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const clipboardBtn = document.getElementById('clipboard');

// 2. Objeto con funciones generadoras
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// 3. Evento: Click en Generar
generateBtn.addEventListener('click', () => {
    // El '+' convierte el string del input en número (ej: "10" -> 10)
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// 4. Función Principal: Generar Password
function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    
    // Contamos cuántos tipos seleccionó el usuario
    const typesCount = lower + upper + number + symbol;
    
    // Filtramos los que son falsos (no seleccionados)
    // Esto crea un array solo con los tipos activos (ej: [{lower}, {upper}])
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
        item => Object.values(item)[0]
    );

    // Si no seleccionó nada, devolvemos vacío
    if (typesCount === 0) {
        return '';
    }

    // Bucle para crear la contraseña
    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            // Llamamos a la función aleatoria correspondiente y agregamos la letra
            generatedPassword += randomFunc[funcName]();
        });
    }

    // Cortamos al tamaño exacto (porque el bucle puede pasarse un poco)
    const finalPassword = generatedPassword.slice(0, length);
    return finalPassword;
}

// 5. Evento: Copiar al Portapapeles
clipboardBtn.addEventListener('click', () => {
    const password = resultEl.innerText;
    
    if (!password) {
        return; // Si no hay nada, no hace nada
    }

    // API moderna del navegador para copiar
    navigator.clipboard.writeText(password);
    alert('¡Contraseña copiada al portapapeles!');
});

// --- FUNCIONES GENERADORAS (Usando Código ASCII) ---
// Ver tabla ASCII para entender los números: http://www.asciitable.com/

function getRandomLower() {
    // 97 es 'a', sumamos un número entre 0-25 para obtener cualquier letra
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    // 65 es 'A'
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    // 48 es '0'
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}
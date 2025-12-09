/* ==========================
   LÓGICA DEL RELOJ DIGITAL
   ========================== */
function updateClock() {
    const now = new Date(); // Obtiene la fecha y hora actual de tu PC
    
    // Extraemos horas, minutos y segundos
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    // Lógica AM/PM (Opcional, pero queda bien)
    // h = h < 10 ? "0" + h : h; // Si quieres formato 24h simple
    
    // Formateamos para que siempre tenga 2 dígitos (ej: 09 en vez de 9)
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    // Actualizamos el HTML
    document.getElementById("clock-display").innerText = `${h}:${m}:${s}`;
    
    // Actualizamos la fecha
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    document.getElementById("date-display").innerText = now.toLocaleDateString('es-ES', options);
}

// setInterval hace que la función 'updateClock' se ejecute cada 1000 milisegundos (1 segundo)
setInterval(updateClock, 1000);
// Llamamos una vez al inicio para que no tarde 1 segundo en aparecer la primera vez
updateClock();


/* ==========================
   LÓGICA DEL CRONÓMETRO
   ========================== */
let seconds = 0;
let minutes = 0;
let hours = 0;

// Variable para guardar el ID del intervalo (necesario para poder pararlo después)
let timerInterval = null;

const stopwatchDisplay = document.getElementById("stopwatch-display");

// Función que corre cada segundo cuando el cronómetro está activo
function stopwatch() {
    seconds++;
    
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    // Formateo visual (agregar ceros a la izquierda)
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    stopwatchDisplay.innerText = `${h}:${m}:${s}`;
}

// Botón INICIAR
document.getElementById("start-btn").addEventListener("click", function() {
    // Solo iniciamos si NO está corriendo ya (para evitar múltiples intervalos a la vez)
    if (timerInterval === null) {
        timerInterval = setInterval(stopwatch, 1000);
    }
});

// Botón PAUSAR
document.getElementById("stop-btn").addEventListener("click", function() {
    // Detiene el intervalo
    clearInterval(timerInterval);
    timerInterval = null; // Reseteamos la variable para saber que está parado
});

// Botón REINICIAR
document.getElementById("reset-btn").addEventListener("click", function() {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
    minutes = 0;
    hours = 0;
    stopwatchDisplay.innerText = "00:00:00";
});
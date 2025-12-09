// Seleccionamos los elementos del DOM
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');
const newBtn = document.getElementById('btn-new');
const copyBtn = document.getElementById('btn-copy');

// URL de la API (Servidor externo)
const apiUrl = "https://dummyjson.com/quotes/random";

// FUNCIÓN ASÍNCRONA (Async/Await)
async function fetchQuote() {
    // 1. Efecto de "Cargando..."
    newBtn.innerText = "Cargando...";
    newBtn.disabled = true; // Desactivar botón para no spamear clicks
    quoteEl.innerText = "...";
    authorEl.innerText = "";

    try {
        // 2. FETCH: Petición al servidor (Esto tarda un poco)
        const response = await fetch(apiUrl);
        
        // 3. Convertimos la respuesta a JSON (formato legible)
        const data = await response.json();

        // 4. Actualizamos el DOM con los datos recibidos
        quoteEl.innerText = data.quote;
        authorEl.innerText = "- " + data.author;

    } catch (error) {
        // Si se va el internet o falla el servidor
        quoteEl.innerText = "Ocurrió un error al obtener la frase.";
        authorEl.innerText = "Intenta de nuevo";
        console.log(error);
    }

    // 5. Restauramos el botón
    newBtn.innerText = "Nueva Frase";
    newBtn.disabled = false;
}

// Evento: Cargar frase al inicio
fetchQuote();

// Evento: Clic en el botón
newBtn.addEventListener('click', fetchQuote);

// Evento: Copiar frase (reutilizando lo aprendido en el proyecto 15)
copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(quoteEl.innerText);
    alert("Frase copiada");
});
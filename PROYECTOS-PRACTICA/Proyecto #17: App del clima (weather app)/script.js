/* ==============================================
   CONFIGURACIÓN
   ============================================== */
// ¡PEGA AQUÍ TU API KEY DE OPENWEATHERMAP!
// Si no tienes una, regístrate en openweathermap.org es gratis.
// De momento dejo una variable vacía, el código fallará si no pones la tuya.
const apiKey = "e3959d8fef82630eb5c3021e86cfd355"; 

// ==============================================

const searchBtn = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-bar");
const weatherContainer = document.querySelector(".weather");
const errorContainer = document.querySelector(".error");

// Elementos a rellenar
const cityEl = document.querySelector(".city");
const tempEl = document.querySelector(".temp");
const iconEl = document.querySelector(".icon");
const descEl = document.querySelector(".description");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");

async function fetchWeather(city) {
    // Si no escribieron nada, no hacemos nada
    if (!city) return;

    try {
        // 1. Construimos la URL (usamos unidades métricas para Celsius)
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=es`;

        // 2. Petición
        const response = await fetch(url);

        // 3. Manejo de error 404 (Ciudad no existe)
        if (response.status === 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").classList.remove("weather-visible");
            return; // Cortamos la función aquí
        }

        // 4. Convertir a JSON
        const data = await response.json();

        // 5. Mostrar datos (Llamamos a otra función para ser ordenados)
        displayWeather(data);
        
        // Ocultar error si había
        document.querySelector(".error").style.display = "none";

    } catch (error) {
        console.error("Error de conexión:", error);
    }
}

function displayWeather(data) {
    // Sacamos los datos del objeto JSON gigante que nos llega
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    // Inyectamos en el HTML
    cityEl.innerText = `Clima en ${name}`;
    tempEl.innerText = `${Math.round(temp)}°C`; // Redondeamos sin decimales
    iconEl.src = `https://openweathermap.org/img/wn/${icon}@2x.png`; // URL del icono
    descEl.innerText = description;
    humidityEl.innerText = `${humidity}%`;
    windEl.innerText = `${speed} km/h`;

    // Hacemos visible la tarjeta
    weatherContainer.classList.remove("loading");
    weatherContainer.classList.add("weather-visible");
    
    // (Opcional) Cambiar la imagen de fondo según la ciudad usando Unsplash
    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
}

// EVENTOS
// Click en la lupa
searchBtn.addEventListener("click", () => {
    fetchWeather(searchBar.value);
});

// Enter en el teclado
searchBar.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        fetchWeather(searchBar.value);
    }
});

// Cargar una ciudad por defecto al iniciar
fetchWeather("Madrid");
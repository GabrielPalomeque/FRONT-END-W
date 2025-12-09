// PEGA TU API KEY DE OMDB AQUÍ (Te llega al email en 1 minuto)
const apiKey = "f64e64d2"; 

const form = document.getElementById('search-form');
const input = document.getElementById('search-input');
const container = document.getElementById('movie-container');

// URL Base
const baseUrl = `https://www.omdbapi.com/?apikey=${apiKey}&s=`;

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que la página se recargue
    const searchTerm = input.value.trim();

    if (searchTerm) {
        getMovies(searchTerm);
    }
});

async function getMovies(search) {
    try {
        // 1. Petición a la API
        const res = await fetch(baseUrl + search);
        const data = await res.json();

        // 2. Verificar si hubo respuesta positiva
        if (data.Response === "True") {
            showMovies(data.Search); // data.Search es el Array de pelis
        } else {
            container.innerHTML = `<div class="empty-message">No se encontraron películas para "${search}" 😕</div>`;
        }

    } catch (error) {
        console.log(error);
        container.innerHTML = `<div class="empty-message">Error de conexión ⚠️</div>`;
    }
}

function showMovies(movies) {
    // Limpiamos el contenedor antes de mostrar nuevos resultados
    container.innerHTML = '';

    movies.forEach(movie => {
        // Desestructuración (Sacar datos del objeto)
        const { Title, Poster, Year } = movie;

        // Crear el DIV de la tarjeta
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie-card');

        // Validar si tiene imagen o poner una genérica
        const imgUrl = Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/300x450?text=No+Image';

        // Llenar el HTML
        movieEl.innerHTML = `
            <img src="${imgUrl}" alt="${Title}">
            <div class="movie-info">
                <h3>${Title}</h3>
                <span>${Year}</span>
            </div>
        `;

        // Meter la tarjeta en el grid
        container.appendChild(movieEl);
    });
}
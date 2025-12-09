const poke_container = document.getElementById('poke-container');
const pokemon_count = 150; // ¿Cuántos quieres traer?

// Diccionario de colores según el tipo
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};

// Obtenemos las llaves del objeto colores (fire, grass, etc.) para usarlas luego
const main_types = Object.keys(colors);

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async (id) => {
    // URL de la PokeAPI
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    const res = await fetch(url);
    const data = await res.json();
    
    createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    // Mapeamos los tipos. El pokemon puede tener varios, tomamos el primero.
    // data.types es un array. Usamos map para sacar solo los nombres.
    const poke_types = pokemon.types.map(type => type.type.name);
    
    // Buscamos cuál de los tipos del pokemon coincide con nuestro diccionario
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    
    // Obtenemos el color
    const color = colors[type];

    // Aplicamos el color al fondo de la carta
    pokemonEl.style.backgroundColor = color;

    // Formateamos el ID para que tenga ceros (Ej: #001 en vez de #1)
    // .toString().padStart(3, '0') convierte 1 en "001"
    const pokemon_id = pokemon.id.toString().padStart(3, '0');

    // Estructura HTML interna
    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
    </div>
    <div class="info">
        <span class="number">#${pokemon_id}</span>
        <h3 class="name">${pokemon.name}</h3>
        <small class="type">Tipo: <span>${type}</span></small>
    </div>
    `;

    pokemonEl.innerHTML = pokemonInnerHTML;

    // Añadimos la carta al contenedor gigante
    poke_container.appendChild(pokemonEl);
};

// ¡Arrancamos la máquina!
fetchPokemons();
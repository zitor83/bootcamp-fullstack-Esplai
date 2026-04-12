import { obtenerImagenPokemonSiempre } from "../utils/adapters.js";

//Contenedor donde se van a agregar las tarjetas de los pokemons
const contenedorPokemons = document.getElementById('tarjetas-automaticas-pokemons');



// Función para crear la tarjeta de cada pokemon a partir de su información.

function crearTarjetaPokemon(pokemon) {
    const tarjetaPokemon = document.createElement('article');
    tarjetaPokemon.classList.add('pokemon-card');

    const divImagen = document.createElement('div');
    divImagen.classList.add('pokemon-image-container');

    const imagenPokemon = document.createElement('img');

    //Obtenemos la imagen del pokemon utilizando la función que hemos creado en el adapter para asegurarnos de obtener siempre una imagen, aunque no sea la frontal por defecto.
    const imagenUrl = obtenerImagenPokemonSiempre(pokemon.sprites)

    imagenPokemon.src = imagenUrl || 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'; // Si no hay imagen, se muestra una imagen por defecto (un pokeball)
    imagenPokemon.alt = pokemon.name;

    const divId = document.createElement('div');
    divId.classList.add('pokemon-id');
    divId.textContent = `ID / ${pokemon.id}`;

    divImagen.append(imagenPokemon, divId);

    const divInfo = document.createElement('div');
    divInfo.classList.add('pokemon-info');

    const h2Name = document.createElement('h2');
    h2Name.classList.add('pokemon-name');
    h2Name.textContent = pokemon.name;

    const ulTypes = document.createElement('ul');
    ulTypes.classList.add('pokemon-types');

    pokemon.type.forEach(type => {
        const liType = document.createElement('li');
        liType.textContent = type;
        ulTypes.append(liType);
    });

    divInfo.append(h2Name, ulTypes);

    //Comprobamos si el pokemon tiene una evolución 
    if (pokemon.evolvesFrom) {
        const pEvolution = document.createElement('p');
        pEvolution.classList.add('pokemon-evolution-from');
        pEvolution.innerHTML = `Evoluciona de:<br>
         ${pokemon.evolvesFrom}`;
        divInfo.append(pEvolution);
    }
    tarjetaPokemon.append(divImagen, divInfo);

    return tarjetaPokemon;

}
// Función para renderizar las tarjetas de los pokemons.
export function renderizarPokemons(pokemons) {

    // Limpiar el contenedor antes de renderizar las tarjetas
    contenedorPokemons.innerHTML = '';

    // Crear un fragmento para mejorar el rendimiento al agregar las tarjetas
    const fragment = document.createDocumentFragment();

    // Recorrer el array de pokemons
    pokemons.forEach(pokemon => {
        // Crear la tarjeta del pokemon llamando a la funcion
        const tarjetaPokemon = crearTarjetaPokemon(pokemon);

        // Agregar la tarjeta al fragmento
        fragment.append(tarjetaPokemon);
    }
    );
    // Agregar el fragmento al contenedor principal
    contenedorPokemons.append(fragment);

}
// Función para mostrar un mensaje de carga mientras se obtienen los datos de los pokemons.
export function mostrarCargando() {
    // Inyectamos un mensaje temporal con una clase para poder darle estilos si queremos
    contenedorPokemons.innerHTML = `
        <div class="contenedor-carga">
            <img src="./js/assets/img/buscando-pokemon.gif" alt="Cargando..." class="gif-carga">
            <p class="mensaje-carga">Buscando pokemons entre la hierba alta...</p>
        </div>
    `;
}


import { obtenerPokemonsDetallados } from './services/api.js';
import { transformarPokemons } from './utils/adapters.js';
import { renderizarPokemons, mostrarCargando } from './ui/render.js';

async function iniciarRenderizado() {
    try {

        // Antes de nada, mostramos un mensaje de carga para que el usuario sepa que estamos obteniendo los datos
        mostrarCargando();
        // 1. Obtenemos la información de internet
        const pokemonsCrudos = await obtenerPokemonsDetallados();

        // 2. Transformamos los datos a nuestro formato
        const pokemonsAdaptados = transformarPokemons(pokemonsCrudos);

        // 3. Renderizamos los pokemons en el HTML y borramos el mensaje de carga
         renderizarPokemons(pokemonsAdaptados);

        // 4. Añadimos la funcionalidad de búsqueda por nombre
        const inputBuscador = document.getElementById('search');

        //Filtramos los pokemons mientras el usuario escribe en la barra de búsqueda
        inputBuscador.addEventListener('input', (evento) => {
            
            //Obtenemos el texto de búsqueda y lo convertimos a minúsculas para hacer una búsqueda case-insensitive
            const textoBusqueda = evento.target.value.toLowerCase();

           // Filtramos el array de pokemons adaptados para quedarnos solo con aquellos cuyo nombre incluye el texto de búsqueda
            const pokemonsFiltrados = pokemonsAdaptados.filter(pokemon => {
                return pokemon.name.toLowerCase().includes(textoBusqueda);
            });

            renderizarPokemons(pokemonsFiltrados);

            
           
        });

    } catch (error) {
        console.error('Error al capturar pokemons:', error);
    }
}

// Arrancamos todo
iniciarRenderizado();
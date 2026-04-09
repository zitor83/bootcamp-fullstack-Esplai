

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

        // 1. Seleccionamos el elemento del DOM que queremos escuchar
        const inputBuscador = document.getElementById('search');

        // 2. Le ponemos el "micrófono" para el evento 'input' (se dispara con cada tecla)
        inputBuscador.addEventListener('input', (evento) => {
            
            // a) Obtenemos el texto que el usuario ha escrito en la barra de búsqueda
            const textoBusqueda = evento.target.value.toLowerCase();

           // b) Filtramos los pokemons adaptados para quedarnos solo con los que coincidan con el texto de búsqueda
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
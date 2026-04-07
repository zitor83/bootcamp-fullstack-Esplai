// js/main.js

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

        // 3. Los pintamos en el HTML y borramos el mensaje de carga
        renderizarPokemons(pokemonsAdaptados);

    } catch (error) {
        console.error('Error al capturar pokemons:', error);
    }
}

// Arrancamos todo
iniciarRenderizado();
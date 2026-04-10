// Función para obtener los detalles completos de un pokemon, incluyendo su evolución (si tiene). 
async function obtenerDetallesEvolucion(urlPokemon) {
    // 1. Pedimos la información del pokemon
    const respuestaPokemon = await fetch(urlPokemon);
    const datosPokemon = await respuestaPokemon.json();

    // 2. Pedimos la evolución que viene anidada en la información de la especie del pokemon
    const respuestaEspecie = await fetch(datosPokemon.species.url);
    const datosEspecie = await respuestaEspecie.json();

    // 3. Inyectamos la evolución en nuestro objeto de datos del pokemon. Si el pokemon no tiene evolución, le asignamos null.
    datosPokemon.evolvesFrom = datosEspecie.evolves_from_species
        ? datosEspecie.evolves_from_species.name
        : null;

    return datosPokemon;
}

// Función para obtener la lista de pokemons, luego obtener los detalles de cada pokemon,
export async function obtenerPokemonsDetallados() {
    // 1. Pedimos la lista de pokemons
    const respuestaLista = await fetch('https://pokeapi.co/api/v2/pokemon?limit=-1');
    // 2. Convertimos la respuesta a formato JSON(imprescindible para poder trabajar con los datos)
    const datosLista = await respuestaLista.json();

    // 3. Obtenemos las URLs de cada pokemon para luego pedir sus detalles completos
    const urlsPokemons = datosLista.results.map(pokemon => pokemon.url);
    // 4. Pedimos los detalles completos de cada pokemon, incluyendo su evolución (si tiene).
    const promesasDetalles = urlsPokemons.map(url => obtenerDetallesEvolucion(url));

    // Devolvemos los datos directamente al main
    return await Promise.all(promesasDetalles);
}




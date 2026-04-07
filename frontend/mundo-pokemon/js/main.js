
//Contenedor donde se van a agregar las tarjetas de los pokemons
const contenedorPokemons = document.getElementById('tarjetas-automaticas-pokemons');

// console.log(contenedorPokemons);

// //1.Contenedor principal de la tarjeta
// const tarjetaPokemon = document.createElement('article');
// tarjetaPokemon.classList.add('pokemon-card');

// //2. Bloque de la imagen
// const divImagen = document.createElement('div');
// divImagen.classList.add('pokemon-image-container');
// // Imagen del pokemon
// const imagenPokemon = document.createElement('img');
// imagenPokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons[0].id}.png`;
// imagenPokemon.alt = pokemons[0].name;
// // Id del pokemon
// const divId = document.createElement('div');
// divId.classList.add('pokemon-id');
// divId.textContent = `#${pokemons[0].id}`;
// // Agregar la imagen y el id al bloque de la imagen
// divImagen.append(imagenPokemon, divId);

// //3. Bloque de la información
// const divInfo= document.createElement('div');
// divInfo.classList.add('pokemon-info');
// // Nombre del pokemon
// const h2Name = document.createElement('h2');
// h2Name.classList.add('pokemon-name');
// h2Name.textContent = pokemons[0].name;
// // Tipos del pokemon
// const ulTypes = document.createElement('ul');
// ulTypes.classList.add('pokemon-types');
// // Agregar los tipos del pokemon a la lista
// pokemons[0].type.forEach( type => {
//     const liType = document.createElement('li');
//     liType.textContent = type;
//     ulTypes.append(liType);
// });
// // Agregar el nombre y los tipos al bloque de la información
// divInfo.append(h2Name, ulTypes);

// // Agregar el bloque de la imagen y el bloque de la información a la tarjeta
// tarjetaPokemon.append(divImagen, divInfo);

// // Agregar la tarjeta al contenedor principal
// contenedorPokemons.append(tarjetaPokemon);

// Función a partir del codigo anterior para generar las tarjetas de los pokemons de forma dinamica

function crearTarjetaPokemon(pokemon) {
    const tarjetaPokemon = document.createElement('article');
    tarjetaPokemon.classList.add('pokemon-card');

    const divImagen = document.createElement('div');
    divImagen.classList.add('pokemon-image-container');

    const imagenPokemon = document.createElement('img');
    imagenPokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
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
function renderizarPokemons(pokemons) {

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

// Llamar a la función para renderizar las tarjetas de los pokemons
// renderizarPokemons(pokemons);


// Función para transformar el array de pokemons detallados a un formato más simple
//  y adaptado a nuestras necesidades en el frontend. Solo queremos el id, el nombre, los tipos y de quién evoluciona (si es que evoluciona de alguien)
function transformarPokemons(arrayPokemosDetallados) {
    return arrayPokemosDetallados.map(pokemon => {
        const tipos = pokemon.types.map(typeInfo => typeInfo.type.name.toUpperCase());

        return {
            id: pokemon.id,
            name: pokemon.name,
            type: tipos,
            evolvesFrom: pokemon.evolvesFrom
        };
    });
}

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
// Función principal para obtener la lista de pokemons, luego obtener los detalles de cada pokemon,
// transformarlos al formato que necesitamos y finalmente renderizarlos en el frontend.
async function obtenerPokemons() {
    try {
        // 1. Pedimos la lista de pokemons
        const respuestaLista = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=9');
        // 2. Convertimos la respuesta a formato JSON(imprescindible para poder trabajar con los datos)
        const datosLista = await respuestaLista.json();

        // 3. Obtenemos las URLs de cada pokemon para luego pedir sus detalles completos
        const urlsPokemons = datosLista.results.map(pokemon => pokemon.url);

        // 4. Pedimos los detalles completos de cada pokemon, incluyendo su evolución (si tiene).
        const promesasDetalles = urlsPokemons.map(url => obtenerDetallesEvolucion(url));

        // 5. Esperamos a que todas las promesas se resuelvan y obtenemos el array de pokemons detallados
        const pokemonsDetallados = await Promise.all(promesasDetalles);

        // 6. Transformamos el array de pokemons detallados a nuestro formato
        const pokemonsAdaptados = transformarPokemons(pokemonsDetallados);

        // 7. Renderizamos los pokemons en el frontend
        renderizarPokemons(pokemonsAdaptados);

    } catch (error) {
        console.error('Error al obtener los pokemons:', error);
    }
}

// Llamamos a la función para obtener los pokemons y renderizarlos en el frontend
obtenerPokemons();
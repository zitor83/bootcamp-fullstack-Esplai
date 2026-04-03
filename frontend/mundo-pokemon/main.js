const pokemons = [
    {
        "id": 1,
        "name": "bulbasour",
        "type": ['POISON', 'GRASS'],
        "evolvesFrom": null,

    },
    {
        "id": 2,
        "name": "ivysaur",
        "type": ['POISON', 'GRASS'],
        "evolvesFrom": "bulbasour",

    },
    {
        "id": 3,
        "name": "venusaur",
        "type": ['POISON', 'GRASS'],
        "evolvesFrom": "ivysaur",

    },
    {
        "id": 4,
        "name": "charmander",
        "type": ['FIRE'],
        "evolvesFrom": null,

    },
    {
        "id": 5,
        "name": "charmeleon",
        "type": ['FIRE'],
        "evolvesFrom": "charmander",

    },
    {
        "id": 6,
        "name": "charizard",
        "type": ['FIRE', 'FLYING'],
        "evolvesFrom": "charmeleon",

    },
    {
        "id": 7,
        "name": "squirtle",
        "type": ['WATER'],
        "evolvesFrom": null,

    },
    {
        "id": 8,
        "name": "wartortle",
        "type": ['WATER'],
        "evolvesFrom": "squirtle",

    },
    {
        "id": 9,
        "name": "blastoise",
        "type": ['WATER'],
        "evolvesFrom": "wartortle",

    },
]
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

//Crear una funcion a partir del codigo anterior para generar las tarjetas de los pokemons de forma dinamica

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
        pEvolution.textContent = `Evoluciona de: ${pokemon.evolvesFrom}`;
        divInfo.append(pEvolution);
    }
    tarjetaPokemon.append(divImagen, divInfo);

    return tarjetaPokemon;

}


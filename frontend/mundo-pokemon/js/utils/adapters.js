

// Función para transformar el array de pokemons detallados a un formato más simple
//  y adaptado a nuestras necesidades en el frontend.
//  Solo queremos el id, el nombre, los tipos y de quién evoluciona (si es que evoluciona de alguien)
export function transformarPokemons(arrayPokemosDetallados) {
    return arrayPokemosDetallados.map(pokemon => {
        const tipos = pokemon.types.map(typeInfo => typeInfo.type.name.toUpperCase());

        return {
            id: pokemon.id,
            name: pokemon.name,
            type: tipos,
            evolvesFrom: pokemon.evolvesFrom,
            sprites: pokemon.sprites
        };
    });
}

export function obtenerImagenPokemonSiempre(sprites) {
  return (
      sprites?.front_default ||
      sprites?.front_shiny ||
      sprites?.other?.home?.front_default ||
      sprites?.other?.['official-artwork']?.front_default ||
    null
  );
}
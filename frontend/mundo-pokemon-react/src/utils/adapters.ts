

import type { PokemonDetail } from "../types/pokemon";

// Función para adaptar las URLs de las imágenes de los pokémon, intentando obtener la mejor calidad disponible.
export function adaptSpriteUrls(sprites: any): string {
    return (
        sprites?.other?.['official-artwork']?.front_default ||
        sprites?.front_default ||
        sprites?.front_shiny ||
        sprites?.other?.home?.front_default ||
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"
    );
}

// Función para transformar el array de pokemons detallados a un formato más simple y adaptado a nuestras necesidades de visualización.
//  Solo queremos el id, el nombre, los tipos y de quién evoluciona (si es que evoluciona de alguien) y la imagen, así que esta función se encarga de extraer esa información y formatearla adecuadamente.
export function adaptPokemonData(dataPokemon: any, evolvesFrom: string | null): PokemonDetail {

    return {
        id: dataPokemon.id,
        name: dataPokemon.name,
        // La API de pokémon tiene varias URLs para las imágenes, algunas de mejor calidad que otras. Esta función se encarga de elegir la mejor disponible.
        image: adaptSpriteUrls(dataPokemon.sprites),
        // La API devuelve los tipos en un formato anidado, así que los mapeamos para obtener solo el nombre del tipo en mayúsculas.
        types: dataPokemon.types.map((typeInfo: any) => typeInfo.type.name.toUpperCase()),
        evolvesFrom: evolvesFrom
    };

}
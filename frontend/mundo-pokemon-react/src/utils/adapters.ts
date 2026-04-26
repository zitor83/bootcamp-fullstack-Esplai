

import type { PokemonDetail } from "../types/pokemon";

// Interfaces de la API
export interface RawPokemonSprites {
    front_default: string | null;
    front_shiny: string | null;
    other?: {
        'official-artwork'?: { front_default: string | null };
        home?: { front_default: string | null };
    };
}

export interface RawPokemonData {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: RawPokemonSprites;
    types: Array<{ type: { name: string } }>;
    abilities: Array<{ ability: { name: string } }>;
}

export interface RawPokemonSpecies {
    evolves_from_species: { name: string } | null;
    flavor_text_entries: Array<{
        flavor_text: string;
        language: { name: string };
    }>;
}

// Función para adaptar las URLs de las imágenes de los pokémon.
export function adaptSpriteUrls(sprites: RawPokemonSprites): string {
    return (
        sprites?.other?.['official-artwork']?.front_default ||
        sprites?.front_default ||
        sprites?.front_shiny ||
        sprites?.other?.home?.front_default ||
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png"
    );
}


export function adaptPokemonData(dataPokemon: RawPokemonData, dataSpecies: RawPokemonSpecies): PokemonDetail {

    // Extraemos la evolucion.
    const evolvesFrom = dataSpecies.evolves_from_species
        ? dataSpecies.evolves_from_species.name
        : null;

    //Buscamos la descripcion en español.Si no existe,en ingles.
    const flavorTextEntry = dataSpecies.flavor_text_entries.find(
        (entry) => entry.language.name === "es"
    ) || dataSpecies.flavor_text_entries.find(
        (entry) => entry.language.name === "en"
    );

    const cleanDescription = flavorTextEntry?.flavor_text.replace(/\f/g, " ").replace(/\n/g, " ") || "Sin descripción disponible.";
    const METERS_CONVERTER = 0.1; // Convierte decimetros(original de la API) a metros )
    const KILOGRAMS_CONVERTER = 0.1; // Convierte hectogramos(original de la API) a kilogramos

    return {
        id: dataPokemon.id,
        name: dataPokemon.name,
        image: adaptSpriteUrls(dataPokemon.sprites),
        types: dataPokemon.types.map((typeInfo) => typeInfo.type.name.toUpperCase()),
        evolvesFrom: evolvesFrom,
        height: parseFloat((dataPokemon.height * METERS_CONVERTER).toFixed(2)), // Convertimos de decímetros a metros y redondeamos a 2 decimales
        weight: parseFloat((dataPokemon.weight * KILOGRAMS_CONVERTER).toFixed(2)), // Convertimos de hectogramos a kilogramos y redondeamos a 2 decimales
        description: cleanDescription,

    };

}
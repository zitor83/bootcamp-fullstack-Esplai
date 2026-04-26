
import type { PokemonDetail } from "../types/pokemon";
import { adaptPokemonData, type RawPokemonSpecies } from "../utils/adapters";



// Función para obtener los detalles de un Pokémon a partir de su URL en la API.Esta función hace dos llamadas a la API.
export async function getPokemonDetails(urlPokemon: string): Promise<PokemonDetail> {
    // 1. Pedimos la información del pokemon
    const response = await fetch(urlPokemon);
    if (!response.ok) throw new Error(`Error HTTP ${response.status} al cargar los detalles del Pokémon: ${response.statusText}`);
    const dataPokemon = await response.json();

    // 2. Pedimos la evolución que viene anidada en la información de la especie del pokemon
    const responseSpecies = await fetch(dataPokemon.species.url);
    if (!responseSpecies.ok) throw new Error(`Error HTTP ${responseSpecies.status} al cargar los detalles de la especie del Pokémon: ${responseSpecies.statusText}`);
    const dataSpecies: RawPokemonSpecies = await responseSpecies.json();



    return adaptPokemonData(dataPokemon, dataSpecies);
}
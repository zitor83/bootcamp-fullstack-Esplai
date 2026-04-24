
import type { PokemonDetail } from "../types/pokemon";
import { adaptPokemonData } from "../utils/adapters";



// Función para obtener los detalles de un Pokémon a partir de su URL en la API.Esta función hace dos llamadas a la API.
export async function getPokemonDetails(urlPokemon: string): Promise<PokemonDetail> {
    // 1. Pedimos la información del pokemon
    const response = await fetch(urlPokemon);
    const dataPokemon = await response.json();

    // 2. Pedimos la evolución que viene anidada en la información de la especie del pokemon
    const responseSpecies = await fetch(dataPokemon.species.url);
    const dataSpecies = await responseSpecies.json();



    return adaptPokemonData(dataPokemon, dataSpecies);
}
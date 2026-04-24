
// Definimos la interfaz para los datos básicos de un Pokémon (nombre y URL)
export interface PokemonBase {
  name: string;
  url: string;
}

// Definimos la interfaz para los datos extendidos de un Pokémon
export interface PokemonDetail {
  id: number;
  name: string;
  image: string;
  types: string[];
  evolvesFrom: string | null;
  height: number;
  weight: number;
  description: string;

}


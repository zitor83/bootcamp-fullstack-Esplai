import type { PokemonDetail } from "../types/pokemon";
import PokemonCard from "./PokemonCard";

// Interface para definir las props que recibirá el componente PokemonGrid.
// En este caso, el componente PokemonGrid recibirá una lista(array) de Pokémon con sus detalles completos.
interface PokemonGridProps {
  pokemons: PokemonDetail[];
  onSelectPokemon: (pokemon: PokemonDetail) => void;
}

// Componente para mostrar una lista de Pokémon en forma de grilla.
// El componente recibe una lista de Pokémon a través de sus props y renderiza un PokemonCard para cada uno de ellos.
function PokemonGrid({ pokemons, onSelectPokemon }: PokemonGridProps) {
  return (
    <section id="auto-cards-pokemons" className="pokemon-grid">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onClick={() => onSelectPokemon(pokemon)}
        />
      ))}
    </section>
  );
}

export default PokemonGrid;

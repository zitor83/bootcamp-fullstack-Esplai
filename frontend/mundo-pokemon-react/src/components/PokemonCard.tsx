import type { PokemonDetail } from "../types/pokemon";

// Interface para definir las props que recibirá el componente PokemonCard.
// No podemos usar directamente PokemonDetail porque el componente PokemonCard solo necesita una parte de los datos que tiene PokemonDetail,
// Es una buena práctica definir una interfaz específica para las props de cada componente, lo que hace que el código sea más claro y fácil de mantener.
interface PokemonCardProps {
  pokemon: PokemonDetail;
}

// Componente para mostrar la información de un Pokémon en una tarjeta.
function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <article className="pokemon-card">
      <div className="pokemon-image-container">
        <img src={pokemon.image} alt={pokemon.name} />
        <div className="pokemon-id">ID / {pokemon.id}</div>
      </div>

      <div className="pokemon-info">
        <h2 className="pokemon-name">{pokemon.name}</h2>

        <ul className="pokemon-types">
          {pokemon.types.map((type) => (
            <li key={type}>{type}</li>
          ))}
        </ul>

        {/* Si el Pokémon tiene una evolución previa, mostramos esa información. Si no tiene evolución previa, no se muestra nada. */}
        {pokemon.evolvesFrom && (
          <p className="pokemon-evolution-from">
            Evoluciona de: <br />
            {pokemon.evolvesFrom}
          </p>
        )}
      </div>
    </article>
  );
}

export default PokemonCard;

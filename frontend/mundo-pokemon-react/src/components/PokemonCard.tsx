import type { PokemonDetail } from "../types/pokemon";

// Interface para definir las props que recibirá el componente PokemonCard.
// No podemos usar directamente PokemonDetail porque el componente PokemonCard solo necesita una parte de los datos que tiene PokemonDetail.
interface PokemonCardProps {
  pokemon: PokemonDetail;
  onClick?: () => void; // Función opcional que se llamará cuando el usuario haga clic en la tarjeta del Pokémon.
}

// Componente para mostrar la información de un Pokémon en una tarjeta.
function PokemonCard({ pokemon, onClick }: PokemonCardProps) {
  return (
    <article className="pokemon-card" onClick={onClick}>
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

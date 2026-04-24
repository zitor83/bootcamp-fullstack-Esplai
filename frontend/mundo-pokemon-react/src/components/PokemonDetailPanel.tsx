import type { PokemonDetail } from "../types/pokemon";

// Interface para definir las props que recibirá el componente PokemonDetailPanel.
interface PokemonDetailPanelProps {
  pokemon: PokemonDetail;
  onClose: () => void; // Función que se llamará cuando el usuario quiera cerrar el panel de detalles.
}

// Componente para mostrar el panel de detalles de un Pokémon.
function PokemonDetailPanel({ pokemon, onClose }: PokemonDetailPanelProps) {
  return (
    <aside className="pokemon-side-panel">
      <button
        className="close-panel-btn"
        onClick={onClose}
        aria-label="Cerrar panel"
      >
        ✕
      </button>

      <div className="panel-image-container">
        <img src={pokemon.image} alt={pokemon.name} className="panel-image" />
      </div>

      <div className="panel-content">
        <span className="panel-id">
          Nº {pokemon.id.toString().padStart(3, "0")}
        </span>
        <h2 className="panel-name">{pokemon.name}</h2>

        <div className="panel-types">
          {pokemon.types.map((type) => (
            <span key={type} className="panel-type-badge">
              {type}
            </span>
          ))}
        </div>

        <p className="panel-description">{pokemon.description}</p>

        <div className="panel-physical-stats">
          <div className="stat-box">
            <span className="stat-label">Peso</span>
            <span className="stat-value">{pokemon.weight} kg</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Altura</span>
            <span className="stat-value">{pokemon.height} m</span>
          </div>
        </div>

        {pokemon.evolvesFrom && (
          <div className="panel-evolution">
            <h3>Evoluciona de</h3>
            <p className="evolution-name">{pokemon.evolvesFrom}</p>
          </div>
        )}
      </div>
    </aside>
  );
}

export default PokemonDetailPanel;

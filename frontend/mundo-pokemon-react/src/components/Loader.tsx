import buscandoGif from "../assets/buscando-pokemon.gif";

// Componente para mostrar una pantalla de carga mientras se están obteniendo los datos de los Pokémon.
function Loader() {
  return (
    <div className="loader-container">
      <img src={buscandoGif} alt="Cargando..." className="loader-gif" />
      <p className="loader-message">
        Buscando Pokemons entre la hierba alta...
      </p>
    </div>
  );
}

export default Loader;

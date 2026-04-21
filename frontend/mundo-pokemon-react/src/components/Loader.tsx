import buscandoGif from "../assets/buscando-pokemon.gif";

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

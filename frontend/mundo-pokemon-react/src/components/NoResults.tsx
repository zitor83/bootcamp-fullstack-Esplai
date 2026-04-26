interface NoResultsProps {
  query: string;
}
// Componente para mostrar un mensaje cuando no hay resultados de búsqueda
function NoResults({ query }: NoResultsProps) {
  return (
    <div className="no-results-container">
      <h2>!No has conseguido atrapar ningún Pokémon!</h2>
      <p>No se encontraron resultados para la búsqueda "{query}".</p>
      <p> Intentalo de nuevo con otro término de búsqueda.</p>
    </div>
  );
}

export default NoResults;

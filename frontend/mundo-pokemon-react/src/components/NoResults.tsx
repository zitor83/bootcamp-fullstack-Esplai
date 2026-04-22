interface NoResultsProps {
  query: string;
}

function NoResults({ query }: NoResultsProps) {
  return (
    <div className="no-results-container">
      <h2>!No has conseguido atrapar ningún Pokémon!</h2>
      <p> Intentalo de nuevo con otro término de búsqueda.</p>
      
    </div>
  );
}

export default NoResults;

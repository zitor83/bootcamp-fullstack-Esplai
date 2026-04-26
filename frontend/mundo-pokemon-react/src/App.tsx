import { useEffect, useMemo, useState } from "react";
import SearchBar from "./components/SearchBar";
import type { PokemonBase, PokemonDetail } from "./types/pokemon";
import { getPokemonDetails } from "./services/api";
import PokemonGrid from "./components/PokemonGrid";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";
import NoResults from "./components/NoResults";
import ErrorMessage from "./components/ErrorMessage";
import { useDebounce } from "./hooks/useDebounce";
import PokemonDetailPanel from "./components/PokemonDetailPanel";

const POKEMONS_BY_PAGE = 12;

function App() {
  // 1. Estado para la lista global de Pokémon  (sin filtrar).
  const [globalList, setGlobalList] = useState<PokemonBase[]>([]);

  // 2. Estado para el texto de búsqueda.
  const [query, setQuery] = useState("");
  // Usamos el hook personalizado useDebounce.
  const debouncedQuery = useDebounce(query, 500);

  // 3. Estado para la página actual que el usuario está viendo
  const [currentPage, setcurrentPage] = useState(1);

  // 4. Estado para los detalles de los Pokémon de la página actual.
  const [pokemonsInPage, setPokemonsInPage] = useState<PokemonDetail[]>([]);

  // 5. Estado para controlar la pantalla de carga
  const [loading, setLoading] = useState(false);

  // 6. Estado para el mensaje de error
  const [error, setError] = useState<string | null>(null);

  // 7. Estado para el Pokémon seleccionado (para mostrar en el panel lateral)
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetail | null>(
    null,
  );

  // USE EFFECT PARA CARGAR LA LISTA GLOBAL
  useEffect(() => {
    //Definimos la función asíncrona dentro del useEffect.
    const fetchInitialList = async () => {
      setLoading(true);
      setError(null); // Reseteamos el error antes de intentar cargar la lista
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=-1",
        );
        const data = await response.json();

        // Guardamos la lista global de Pokémon en el estado. El resultado en data.results es un array de objetos con name y url.
        setGlobalList(data.results);
      } catch (error) {
        console.error("Error al cargar la lista de Pokémon:", error);
        setError(
          "¡No se pudo cargar la lista de Pokémon! Por favor, intenta de nuevo.",
        );
      } finally {
        setLoading(false);
      }
    };

    // Llamamos a la función para cargar la lista global de Pokémon al iniciar la aplicación.
    // Al pasar un array vacío como segundo argumento, este useEffect solo se ejecutará una vez al montar el componente, lo que es ideal para cargar datos iniciales.
    fetchInitialList();
  }, []);

  // ==========================================
  // ESTADOS DERIVADOS (A partir de los estados anteriores)
  // ==========================================

  // Filtramos la lista global basándonos en el texto de búsqueda debouncedQuery.
  const filteredList = useMemo(
    () =>
      globalList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(debouncedQuery.toLowerCase()),
      ),
    [globalList, debouncedQuery],
  ); // IMPORTANTE: Usamos useMemo para memorizar el resultado del filtrado y solo recalcularlo cuando cambie la lista global o el texto de búsqueda.

  // Calculamos el total de páginas basándonos en la lista ya filtrada
  const pageTotal = Math.max(
    1,
    Math.ceil(filteredList.length / POKEMONS_BY_PAGE),
  );


  // 1. Calcular la porción de Pokémon 

  const startIndex = (currentPage - 1) * POKEMONS_BY_PAGE;
  const endIndex = startIndex + POKEMONS_BY_PAGE;

  // Este es el array de Pokémon que corresponde a la página actual, pero solo con name y url.
  const currentSlice = useMemo(
    () => filteredList.slice(startIndex, endIndex),
    [filteredList, startIndex, endIndex],
  ); // IMPORTANTE: Usamos useMemo para memorizar el resultado del slice y solo recalcularlo cuando cambie la lista filtrada o los índices. Esto evita un loop infinito de renderizados.

  // 2. Descarga los detalles cuando cambia la página o la búsqueda
  useEffect(() => {
    const fetchCurrentPageDetails = async () => {
      // Si no hay Pokémon en este trozo (Ej, si la búsqueda no da resultados), vacia la pantalla y salimos.
      setError(null); // Reseteamos el error antes de intentar carga
      if (currentSlice.length === 0) {
        setPokemonsInPage([]);
        return;
      }
      setLoading(true);
      try {
        // Mapeamos el trozo para crear un array de promesas
        const PokemonsInPagePromises = currentSlice.map((pokemon) =>
          getPokemonDetails(pokemon.url),
        );
        // Esperamos a que TODAS las promesas de los pokémon terminen
        const pokemonInPageDetails = await Promise.all(PokemonsInPagePromises);

        // Guardamos los detalles completos en el estado
        setPokemonsInPage(pokemonInPageDetails);
      } catch (error) {
        console.error("Error cargando los detalles:", error);
        setError(
          "¡No se pudieron cargar los detalles de los Pokémon! Por favor, intenta de nuevo.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentPageDetails();
  }, [currentSlice]); // IMPORTANTE: Este efecto se dispara si cambia la página, el texto de búsqueda, o cuando la lista global se carga.

  return (
    <main>
      <SearchBar
        value={query}
        onChange={(newText) => {
          setQuery(newText);
          setcurrentPage(1); // Reset de página al buscar
          setSelectedPokemon(null); // Reset de pokemon seleccionado al buscar algo nuevo.
        }}
      />
      {/* NUEVO CONTENEDOR FLEX PARA SEPARAR EL GRID DEL PANEL */}
      <div className="layout-container">
        {/* ESTE SERIA EL LADO IZQUIERDO: Todo lo que ya tenía antes de incluir el panel */}
        <div className="grid-section">
          {error ? (
            <ErrorMessage
              message={error}
              onRetry={() => window.location.reload()}
            />
          ) : loading ? (
            <Loader />
          ) : filteredList.length === 0 ? (
            <NoResults query={query} />
          ) : (
            <PokemonGrid
              pokemons={pokemonsInPage}
              onSelectPokemon={setSelectedPokemon}
            />
          )}
          {!error && !loading && pageTotal > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={pageTotal}
              onPrevious={() => setcurrentPage((prev) => prev - 1)}
              onNext={() => setcurrentPage((prev) => prev + 1)}
              onPageChange={(newPage) => setcurrentPage(newPage)}
            />
          )}
        </div>

        {/* ESTE SERIA EL LADO DERECHO: El panel de detalles */}
        {selectedPokemon && (
          <PokemonDetailPanel
            pokemon={selectedPokemon}
            onClose={() => setSelectedPokemon(null)}
          />
        )}
      </div>
    </main>
  );
}

export default App;

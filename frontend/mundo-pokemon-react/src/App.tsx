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
// Añadimos Outlet a la importación
import { Route, Routes, useNavigate, Outlet } from "react-router-dom";
import PokemonDetailWrapper from "./components/PokemonDetailWrapper";

const POKEMONS_BY_PAGE = 12;

function App() {
  // 1. Estado para la lista global de Pokémon  (sin filtrar).
  const [globalList, setGlobalList] = useState<PokemonBase[]>([]);

  // 2. Estado para el texto de búsqueda.
  const [query, setQuery] = useState("");
  // Usamos el hook personalizado useDebounce.
  const debouncedQuery = useDebounce(query, 500);

  // 3. Estado para la página actual que el usuario está viendo
  const [currentPage, setCurrentPage] = useState(1);

  // 4. Estado para los detalles de los Pokémon de la página actual.
  const [pokemonsInPage, setPokemonsInPage] = useState<PokemonDetail[]>([]);

  // 5. Estado para controlar la pantalla de carga
  const [loading, setLoading] = useState(false);

  // 6. Estado para el mensaje de error
  const [error, setError] = useState<string | null>(null);

  // 7. Hook de navegación de React Router para cambiar de páginas
  const navigate = useNavigate();

  // 8. Estado para contar los reintentos de carga (para mostrar un mensaje diferente después de varios intentos fallidos)
  const [retryCount, setRetryCount] = useState(0);

  // // 7. Estado para el Pokémon seleccionado (para mostrar en el panel lateral)
  //  Con las rutas no haría falta, pero lo dejamos para mostrar el panel lateral.
  // const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetail | null>(
  //   null,
  // );

  //Definimos la función asíncrona dentro del useEffect.
  useEffect(() => {
    const fetchInitialList = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=-1",
        );
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        const data = await response.json();
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

    fetchInitialList();
  }, [retryCount]);

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
    <Routes>
      {/* RUTA PADRE (LAYOUT): Contiene la estructura fija que no desaparece */}
      <Route
        element={
          <main>
            <SearchBar
              value={query}
              onChange={(newText) => {
                setQuery(newText);
                setCurrentPage(1); // Reset de página al buscar
                navigate("/"); // Navegamos a la página principal al hacer una nueva búsqueda, para cerrar el panel lateral.
              }}
            />
            {/* NUEVO CONTENEDOR FLEX PARA SEPARAR EL GRID DEL PANEL */}
            <div className="layout-container">
              {/* ESTE SERIA EL LADO IZQUIERDO: Todo lo que ya tenía antes de incluir el panel */}
              <div className="grid-section">
                {error ? (
                  <ErrorMessage
                    message={error}
                    onRetry={() => setRetryCount((prev) => prev + 1)}
                  />
                ) : loading ? (
                  <Loader />
                ) : filteredList.length === 0 ? (
                  <NoResults query={query} />
                ) : (
                  <PokemonGrid
                    pokemons={pokemonsInPage}
                    onSelectPokemon={(pokemon) =>
                      navigate(`/pokemon/${pokemon.id}`)
                    }
                  />
                )}
                {!error && !loading && pageTotal > 0 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={pageTotal}
                    onPrevious={() => setCurrentPage((prev) => prev - 1)}
                    onNext={() => setCurrentPage((prev) => prev + 1)}
                    onPageChange={(newPage) => setCurrentPage(newPage)}
                  />
                )}
              </div>

              {/* El Outlet inyecta las rutas hijas en este hueco */}
              <Outlet />
            </div>
          </main>
        }
      >
        {/* RUTAS HIJAS: Definen qué se pinta dentro del <Outlet /> */}

        {/* Si la ruta es '/', el Outlet no renderiza nada (panel cerrado) */}
        <Route path="/" element={null} />

        {/* Si la ruta es '/pokemon/:id', el Outlet renderiza el panel */}
        <Route
          path="/pokemon/:id"
          element={
            <PokemonDetailWrapper
              pokemons={pokemonsInPage}
              onClose={() => navigate("/")}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

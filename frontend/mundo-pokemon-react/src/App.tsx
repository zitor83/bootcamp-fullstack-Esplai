import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import type { PokemonBase, PokemonDetail } from "./types/pokemon";
import { getPokemonDetails } from "./services/api";
import PokemonGrid from "./components/PokemonGrid";

const POKEMONS_BY_PAGE = 24;

function App() {
  // 1. Estado para la lista global de Pokémon  (sin filtrar). Aqui le paso un generico para decirle que es un array de PokemonBase, y el estado inicia como un array vacio.
  const [globalList, setGlobalList] = useState<PokemonBase[]>([]);

  // 2. Estado para el texto de búsqueda que el usuario ingresa para filtrar la lista global
  const [query, setQuery] = useState("");

  // 3. Estado para la página actual que el usuario está viendo (inicia en 1)
  const [currentPage, setcurrentPage] = useState(1);

  // 4. Estado para los detalles de los Pokémon de la página actual.
  const [pokemonsInPage, setPokemonsInPage] = useState<PokemonDetail[]>([]);

  // 5. Estado para controlar la pantalla de carga
  const [loading, setLoading] = useState(false);

  // USE EFFECT PARA CARGAR LA LISTA GLOBAL DE POKEMONES AL INICIAR LA APLICACION
  useEffect(() => {
    //Definimos la función asíncrona dentro del useEffect para cargar la lista global de Pokémon al iniciar la aplicación.
    const fetchInitialList = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=-1",
        );
        const data = await response.json();

        // Guardamos la lista global de Pokémon en el estado. El resultado en data.results es un array de objetos con name y url.
        setGlobalList(data.results);
      } catch (error) {
        console.error("Error al cargar la lista de Pokémon:", error);
      } finally {
        setLoading(false);
      }
    };

    // Llamamos a la función para cargar la lista global de Pokémon al iniciar la aplicación.
    // Al pasar un array vacío como segundo argumento, este useEffect solo se ejecutará una vez al montar el componente, lo que es ideal para cargar datos iniciales.
    fetchInitialList();
  }, []);

  // ==========================================
  // ESTADOS DERIVADOS (Los calculamos a partir de los estados anteriores)
  // ==========================================

  // Filtramos la lista global basándonos en el texto de búsqueda
  const filteredList = globalList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(query.toLowerCase()),
  );

  // Calculamos el total de páginas basándonos en la lista ya filtrada
  const pageTotal = Math.max(
    1,
    Math.ceil(filteredList.length / POKEMONS_BY_PAGE),
  );

  // 1. Matemáticas para cortar la porción de 24 Pokémon (ESTADO DERIVADO)
  const startIndex = (currentPage - 1) * POKEMONS_BY_PAGE;
  const endIndex = startIndex + POKEMONS_BY_PAGE;
  const currentSlice = filteredList.slice(startIndex, endIndex);

  // 2. NUEVO USE EFFECT: Descarga los detalles cuando cambia la página o la búsqueda
  useEffect(() => {
    // Si no hay Pokémon en este trozo (por ejemplo, si la búsqueda no dio resultados), vaciamos la pantalla y salimos
    if (currentSlice.length === 0) {
      setPokemonsInPage([]);
      return;
    }

    const fetchCurrentPageDetails = async () => {
      setLoading(true);
      try {
        // Mapeamos el trozo para crear un array de promesas
        const promises = currentSlice.map((pokemon) =>
          getPokemonDetails(pokemon.url),
        );
        // Esperamos a que TODAS las promesas de los 24 pokémon terminen
        const details = await Promise.all(promises);

        // Guardamos los detalles completos en el estado
        setPokemonsInPage(details);
      } catch (error) {
        console.error("Error cargando los detalles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentPageDetails();
  }, [currentPage, query, globalList.length]); // IMPORTANTE: Este efecto se dispara si cambia la página, el texto de búsqueda, o cuando la lista global se carga.

  return (
    <main>
      <SearchBar
        value={query}
        onChange={(newText) => {
          setQuery(newText);
          setcurrentPage(1); // Reset de página al buscar
        }}
      />

      {loading ? <p>Cargando...</p> : <PokemonGrid pokemons={pokemonsInPage} />}
    </main>
  );
}

export default App;

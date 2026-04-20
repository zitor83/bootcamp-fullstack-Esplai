import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";

// Definimos la interfaz para los datos básicos de un Pokémon (nombre y URL)
export interface PokemonBase {
  name: string;
  url: string;
}

const POKEMONS_POR_PAGINA = 24;

function App() {
  // 1. Estado para la lista global de Pokémon  (sin filtrar). Aqui le paso un generico para decirle que es un array de PokemonBase, y el estado inicia como un array vacio.
  const [GlobalList, setGlobalList] = useState<PokemonBase[]>([]);

  // 2. Estado para el texto de búsqueda que el usuario ingresa para filtrar la lista global
  const [query, setQuery] = useState("");

  // 3. Estado para la página actual que el usuario está viendo (inicia en 1)
  const [currentPage, setcurrentPage] = useState(1);

  // 4. Estado para los detalles de los Pokémon de la página actual.
  const [pokemonsInPage, setPokemonsInPage] = useState<any[]>([]);

  // 5. Estado para controlar la pantalla de carga
  const [loading, setLoading] = useState(false);

  // USE EFFECT PARA CARGAR LA LISTA GLOBAL DE POKEMONES AL INICIAR LA APLICACION
  useEffect(() => {
    //Definimos la función asíncrona dentro del useEffect para cargar la lista global de Pokémon al iniciar la aplicación.
    const fetchListaInicial = async () => {
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
    fetchListaInicial();
  }, []);

  // ==========================================
  // ESTADOS DERIVADOS (Los calculamos a partir de los estados anteriores)
  // ==========================================

  // Filtramos la lista global basándonos en el texto de búsqueda
  const listaFiltrada = GlobalList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(query.toLowerCase()),
  );

  // Calculamos el total de páginas basándonos en la lista ya filtrada
  const totalPaginas = Math.max(
    1,
    Math.ceil(listaFiltrada.length / POKEMONS_POR_PAGINA),
  );

  return (
    <main>
      <SearchBar
        value={query}
        onChange={(newText) => {
          setQuery(newText);
          setcurrentPage(1);
        }}
      />
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <p>Total Pokemons cargados: {GlobalList.length}</p>
      )}
    </main>
  );
}

export default App;

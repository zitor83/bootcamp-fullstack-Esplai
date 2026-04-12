import { obtenerListaLigeraPokemons, obtenerDetallesEvolucion } from './services/api.js';
import { transformarPokemons } from './utils/adapters.js';
import { renderizarPokemons, mostrarCargando } from './ui/render.js';

// #### 1. ESTADO GLOBAL DE LA APLICACIÓN ####
let paginaActual = 1;
const pokemonsPorPagina = 24;
let listaGlobalLigera = [];  //Guardará todos los nombres y URLs de los pokemon solamente.
let listaFiltradaLigera = []; //Guarará los nombres que coincidan con el filtro de búsqueda, para luego paginar solo esos resultados.

// #### 2. ELEMENTOS DEL DOM A UTILIZAR ####
const btnAnterior = document.getElementById('btn-anterior');
const btnSiguiente = document.getElementById('btn-siguiente');
const inputBuscador = document.getElementById('search');
const inputPagina = document.getElementById('input-pagina');
const spanTotalPaginas = document.getElementById('total-paginas');

// #### 3. LÓGICA DE PAGINACIÓN Y DESCARGA BAJO DEMANDA ####
async function actualizarPaginacion() {
    // Calculamos el total de páginas según la longitud de la lista filtrada.
    // Si no hay resultados, al menos habrá 1 página vacía gracias a Math.max. y Math.ceil se encargará de redondear hacia arriba.
    const totalPaginas = Math.max(1, Math.ceil(listaFiltradaLigera.length / pokemonsPorPagina));
    
    // Actualizamos el input de página, el total de páginas.
    inputPagina.value = paginaActual;
    inputPagina.max = totalPaginas;
    spanTotalPaginas.textContent = totalPaginas;

    //Apagamos o encendemos los botones de siguiente y anterior dependiendo de si estamos en la primera página o en la última.
    btnAnterior.disabled = paginaActual === 1;
    btnSiguiente.disabled = paginaActual >= totalPaginas;

    //Matemáticas para saber que porción del array global tenemos que mostrar en esta página.
    const indiceInicio = (paginaActual - 1) * pokemonsPorPagina;
    const indiceFin = indiceInicio + pokemonsPorPagina;

    //Cortamosla lista gigante y nos quedamos solo con la porción(24 o menos) que corresponde a esta página.
    const pokemonsRebanada = listaFiltradaLigera.slice(indiceInicio, indiceFin);
    
    //Mostramos el mensaje de cargando mientras obtenemos los detalles de cada pokemon de esta página.
    mostrarCargando();

    try {
        //Detalles completos pero SOLO de los pokemon de esta página. El resto de pokemon no los pedimos todavía.
        const detallesPokemonPorPagina = pokemonsRebanada.map(pokemon => obtenerDetallesEvolucion(pokemon.url));
        const detallesCrudosPorPagina = await Promise.all(detallesPokemonPorPagina);
        
        //Adaptamos a nuestro formato y renderizamos SOLO los pokemon de esta página.
        const pokemonsAdaptados = transformarPokemons(detallesCrudosPorPagina);
        renderizarPokemons(pokemonsAdaptados);
    } catch (error) {
        console.error("Error cargando los detalles de los pokemons:", error);
    }
}

// #### 4. EVENTOS DE LOS BOTONES DE PAGINACIÓN ####

btnAnterior.addEventListener('click', () => {
    if (paginaActual > 1) {
        paginaActual--;
        actualizarPaginacion();
    }
});

btnSiguiente.addEventListener('click', () => {
    const totalPaginas = Math.ceil(listaFiltradaLigera.length / pokemonsPorPagina);
    if (paginaActual < totalPaginas) {
        paginaActual++;
        actualizarPaginacion();
    }
});

// #### 5. EVENTO CUANDO EL USUARIO ESCRIBE UNA PÁGINA CONCRETA ####
inputPagina.addEventListener('change', (evento) => {
    const totalPaginas = Math.max(1, Math.ceil(listaFiltradaLigera.length / pokemonsPorPagina));
    
    // Obtenemos el número que ha escrito (o 1 si escribe letras raras)
    let paginaEscrita = parseInt(evento.currentTarget.value) || 1;

    // Validaciones para que el número esté dentro del rango de páginas disponibles
    if (paginaEscrita < 1) {
        paginaEscrita = 1;
    } else if (paginaEscrita > totalPaginas) {
        paginaEscrita = totalPaginas;
    }

    // Actualizamos y repintamos la página, y hacemos scroll hacia arriba para que el usuario vea el cambio.
    paginaActual = paginaEscrita;
    actualizarPaginacion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// #### 6. EVENTO DEL BUSCADOR ####
inputBuscador.addEventListener('input', (evento) => {
    const textoBusqueda = evento.currentTarget.value.toLowerCase();

    //Filtramos la lista gigante de pokemons ligeros (solo nombre y URL) según el texto que ha escrito el usuario. Esto es muy rápido porque no estamos pidiendo detalles, solo filtrando por nombre.
    listaFiltradaLigera = listaGlobalLigera.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(textoBusqueda);
    });

    //Como ha cambiado la busqueda, volvemos a la página 1 para mostrar los resultados desde el principio, y actualizamos la paginación para mostrar los resultados filtrados.
    paginaActual = 1;
    actualizarPaginacion();
});

// #### 6. ARRANQUE DE LA APLICACIÓN ####
async function iniciarRenderizado() {
    try {
        mostrarCargando();

        //Descargamos todos los nombres y URL sin detalles(tarda poco)
        listaGlobalLigera = await obtenerListaLigeraPokemons();

        //Inicialmente, la lista filtrada es igual a la lista global, porque no hay ningún filtro aplicado.
        listaFiltradaLigera = [...listaGlobalLigera];

        //Arrancamos la primera página.
        await actualizarPaginacion();
    } catch (error) {
        console.error('Error al inicializar la Pokédex:', error);
    }
}

iniciarRenderizado();
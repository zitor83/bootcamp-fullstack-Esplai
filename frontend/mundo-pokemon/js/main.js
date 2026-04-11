import { obtenerListaLigeraPokemons, obtenerDetallesEvolucion } from './services/api.js';
import { transformarPokemons } from './utils/adapters.js';
import { renderizarPokemons, mostrarCargando } from './ui/render.js';

// --- 1. ESTADO GLOBAL DE LA APLICACIÓN ---
let paginaActual = 1;
const pokemonsPorPagina = 24;
let listaGlobalLigera = []; // Guardará los 1300 nombres
let listaFiltradaLigera = []; // Guardará los nombres que coincidan con la búsqueda

// --- 2. ELEMENTOS DEL DOM ---
const btnAnterior = document.getElementById('btn-anterior');
const btnSiguiente = document.getElementById('btn-siguiente');
const spanPagina = document.getElementById('pagina-actual');
const inputBuscador = document.getElementById('search');

// --- 3. LÓGICA DE PAGINACIÓN Y DESCARGA BAJO DEMANDA ---
async function actualizarPaginacion() {
    // Calculamos cuántas páginas hay en total según la búsqueda actual
    const totalPaginas = Math.ceil(listaFiltradaLigera.length / pokemonsPorPagina);
    spanPagina.textContent = `Página ${paginaActual} de ${totalPaginas || 1}`;
    
    // Apagamos o encendemos los botones si estamos en la primera o última página
    btnAnterior.disabled = paginaActual === 1;
    btnSiguiente.disabled = paginaActual >= totalPaginas || totalPaginas === 0;

    // Matemáticas para saber qué porción del array nos toca enseñar
    const indiceInicio = (paginaActual - 1) * pokemonsPorPagina;
    const indiceFin = indiceInicio + pokemonsPorPagina;
    
    // Cortamos la lista gigante y nos quedamos solo con los 12 (o menos) de esta página
    const pokemonsRebanada = listaFiltradaLigera.slice(indiceInicio, indiceFin);
    
    // Mostramos el mensaje/gif de carga porque ahora sí vamos a pedir imágenes
    mostrarCargando();

    try {
        // Pedimos los detalles completos SOLO de esos 12
        const promesasDetalles = pokemonsRebanada.map(pokemon => obtenerDetallesEvolucion(pokemon.url));
        const detallesCrudos = await Promise.all(promesasDetalles);
        
        // Adaptamos y renderizamos en pantalla
        const pokemonsAdaptados = transformarPokemons(detallesCrudos);
        renderizarPokemons(pokemonsAdaptados);
    } catch (error) {
        console.error("Error cargando los detalles de esta página", error);
    }
}

// --- 4. EVENTOS DE LOS BOTONES DE PAGINACIÓN ---
btnAnterior.addEventListener('click', () => {
    if (paginaActual > 1) {
        paginaActual--;
        actualizarPaginacion();
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Sube la pantalla arriba del todo
    }
});

btnSiguiente.addEventListener('click', () => {
    const totalPaginas = Math.ceil(listaFiltradaLigera.length / pokemonsPorPagina);
    if (paginaActual < totalPaginas) {
        paginaActual++;
        actualizarPaginacion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// --- 5. EVENTO DEL BUSCADOR ---
inputBuscador.addEventListener('input', (evento) => {
    const textoBusqueda = evento.currentTarget.value.toLowerCase();

    // Filtramos la lista de 1300 nombres comparando el texto
    listaFiltradaLigera = listaGlobalLigera.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(textoBusqueda);
    });

    // Como ha cambiado la búsqueda, volvemos obligatoriamente a la página 1
    paginaActual = 1;
    actualizarPaginacion();
});

// --- 6. ARRANQUE DE LA APLICACIÓN ---
async function iniciarRenderizado() {
    try {
        mostrarCargando();
        
        // Descargamos los 1300 nombres (tarda unos pocos milisegundos)
        listaGlobalLigera = await obtenerListaLigeraPokemons();
        
        // Al principio, la lista filtrada es idéntica a la global (no hay búsqueda)
        listaFiltradaLigera = [...listaGlobalLigera];

        // Arrancamos la primera página
        await actualizarPaginacion();

    } catch (error) {
        console.error('Error al inicializar la Pokédex:', error);
    }
}

// ¡A jugar!
iniciarRenderizado();
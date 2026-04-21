// Interface con los props que recibe el componente Pagination
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  onPageChange: (page: number) => void;
}

// Componente para la paginación de la lista de Pokémon que recibe el número de página actual, el total de páginas, y funciones para manejar los eventos de cambio de página
function Pagination({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  onPageChange,
}: PaginationProps) {
  return (
    // Sección de paginación con botones para navegar entre páginas y un input para ir a una página específica
    <section className="pagination">
      {/* Renderizado boton anterior. Deshabilitado si estamos en la primera página */}
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        aria-label="Anterior"
      >
        Anterior
      </button>

      {/* Información de la página actual y un input para cambiar directamente a una página específica */}
      <span className="info-pagination">
        Página
        <input
          type="number"
          value={currentPage}
          min="1"
          max={totalPages}
          onChange={(e) => {
            const newPage = parseInt(e.target.value);
            if (!isNaN(newPage) && newPage >= 1 && newPage <= totalPages) {
              onPageChange(newPage);
            } else {
              onPageChange(currentPage); // Si el valor no es válido, mantenemos la página actual
            }
          }}
        />
        de <span>{totalPages}</span>
      </span>

      {/* Renderizado boton siguiente. Deshabilitado si estamos en la última página */}
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        aria-label="Siguiente"
      >
        Siguiente
      </button>
    </section>
  );
}

export default Pagination;

import { useEffect, useState } from "react";

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
  // Estado local para almacenar lo que el usuario esta escribiendo temporalmente en el input de numero de pagina.
  const [inputValue, setInputValue] = useState(() => currentPage.toString());

  //Sincronizar el input si la pagina cambia por otros medios (por ejemplo, con los botones de siguiente/anterior)
  useEffect(() => {
    setInputValue(currentPage.toString());
  }, [currentPage]);

  // Función para manejar el evento de ir a una página específica cuando el usuario presiona Enter o cambia el valor del input
  const handleGoToPage = () => {
    const newPage = parseInt(inputValue);

    // Validamos que el nuevo número de página sea un número válido y esté dentro del rango permitido
    if (!isNaN(newPage) && newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    } else {
      setInputValue(currentPage.toString()); // Si el valor no es válido, restablecemos el input al número de página actual
    }
  };

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
      <span className="pagination-info">
        Página
        <input
          type="number"
          value={inputValue}
          min="1"
          max={totalPages}
          title="Escribe un número y pulsa Enter"
          className="pagination-input"
          onChange={(e) => setInputValue(e.target.value)} // Solo actualiza el estado local
          onBlur={handleGoToPage} // Dispara la búsqueda al hacer clic fuera del input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleGoToPage(); // Dispara la búsqueda al pulsar Enter
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

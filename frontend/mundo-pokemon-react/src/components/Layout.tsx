import { Outlet, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

// Definimos las props que necesita el Layout para el SearchBar
interface LayoutProps {
  query: string;
  setQuery: (query: string) => void;
  setCurrentPage: (page: number) => void;
}

function Layout({ query, setQuery, setCurrentPage }: LayoutProps) {
  const navigate = useNavigate();

  return (
    <main>
      <SearchBar
        value={query}
        onChange={(newText) => {
          setQuery(newText);
          setCurrentPage(1); // Reset de página al buscar
          navigate("/"); // Volvemos a la raíz para cerrar el panel
        }}
      />

      {/* Contenedor principal donde React Router inyectará las rutas hijas */}
      <div className="layout-container">
        <Outlet />
      </div>
    </main>
  );
}

export default Layout;

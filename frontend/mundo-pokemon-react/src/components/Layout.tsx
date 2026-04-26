// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import SearchBar from "./SearchBar";

interface LayoutProps {
  query: string;
  setQuery: (q: string) => void;
  setcurrentPage: (p: number) => void;
}

function Layout({ query, setQuery, setcurrentPage }: LayoutProps) {
  return (
    <main>
      <SearchBar
        value={query}
        onChange={(newText) => {
          setQuery(newText);
          setcurrentPage(1);
        }}
      />
      
      {/* El "hueco" donde se inyectará el contenido de las rutas */}
      <div className="layout-container">
         <Outlet /> 
      </div>
    </main>
  );
}

export default Layout;
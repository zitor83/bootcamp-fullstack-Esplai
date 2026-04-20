// Interface para definir las props que recibirá el componente SearchBar.
interface SearchBarProps {
  value: string;
  onChange: (newValue: string) => void;
}

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <section className="search-bar">
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Filtra Pokemons por nombre..."
          aria-label="Buscar Pokemon por nombre"
          value={value} // El valor del input se controla a través de la prop 'value' que se recibe del componente padre.
          onChange={(e) => onChange(e.target.value)} // Cuando el usuario escribe en el input, se llama a la función 'onChange' que se recibe del componente padre, pasando el nuevo valor del input.
        />
      </form>
    </section>
  );
}

export default SearchBar;

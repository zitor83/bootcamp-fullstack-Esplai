import { useState } from "react";

function ButtonHidden() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(prevVisible => !prevVisible);
  };
  return (
    <article>
        <h2>Botón Mágico</h2>
      <button onClick={toggleVisibility}>
        {visible ? "Ocultar" : "Mostrar"} Párrafo
      </button>
      {visible && (
        <p>Este párrafo aparece y desaparece al hacer clic en el botón.</p>
      )}
    </article>
  );
}

export default ButtonHidden;

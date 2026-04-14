import { useState } from "react";

function Button() {
  const [valor, setValor] = useState(0);

  const addOne = () => {
    setValor(valor + 1);
  };
  return (
    <article>
      <h2>Valor Actual: {valor}</h2>
      <button onClick={addOne}>Agregar Uno</button>
    </article>
  );
}
export default Button;

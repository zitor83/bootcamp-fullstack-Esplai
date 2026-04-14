import { useState } from "react";

function Sample() {
  const [value, setValue] = useState(0);

  function updateValue() {
    setValue(value + 1);
  }
  return (
    <section>
      <p>{value}</p>
      <button onClick={updateValue}>Actualizar</button>
    </section>
  );
}
export default Sample;

//Le falta la exportacion
//Le falta el import de useState
//El setValue no estaba definido dentro updatedValue, lo cual generaba un error al intentar actualizar el estado.

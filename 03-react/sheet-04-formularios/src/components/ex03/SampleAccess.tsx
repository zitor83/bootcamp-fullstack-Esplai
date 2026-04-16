import { useState } from "react";
import React from "react";

function SampleAccess() {
  const [email, setEmail] = useState("");
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(`Dato enviado: ${email}`);
  }
  return (
    <div
      style={{ margin: "10px", border: "1px solid #141414", padding: "10px" }}
    >
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Enviar</button>
      </form>

      <section>
        <h1>Lista de errores en el formulario del ejercicio</h1>
        <ol>
          <li>No tiene exportación del componente</li>
          <li>Usaba for en vez de htmlFor en el input</li>
          <li>
            Faltaba event.preventDefault() en el submit para evitar la recarga
            de la página al enviar el formulario
          </li>
          <li>
            Faltaba onChange en el input para actualizar el estado del email
          </li>
          <li>
            No es un fallo como tal pero he añadido el type de dato a "e" en
            handleSubmit para evitar errores
          </li>
        </ol>
      </section>
    </div>
  );
}

export default SampleAccess;

import { useState } from "react";

function MessageToggle() {
  const [message, setMessage] = useState("Mensaje inicial");
  const messaggeHandler = () => {
    setMessage("Mensaje actualizado al hacer click");
  };

  return (
    <section
      style={{ border: "1px solid black", padding: "10px", margin: "10px" }}
    >
      <h1>Mensaje Interactivo</h1>
      <input type="button" value="Mostrar Mensaje" onClick={messaggeHandler} />
      <p>{message}</p>
    </section>
  );
}

export default MessageToggle;

import { useId, useState } from "react";

function TextAreaComponent() {
  const [message, setMessage] = useState("");

  const inputId = useId();

  return (
    <section
      style={{ margin: "10px", border: "1px solid #141414", padding: "10px" }}
    >
      <h1>Escribe un mensaje</h1>
      <textarea
        id={inputId}
        placeholder="Escribe tu mensaje aquí..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <p>{message ? message : "No hay mensaje para mostrar"}</p>
    </section>
  );
}

export default TextAreaComponent;

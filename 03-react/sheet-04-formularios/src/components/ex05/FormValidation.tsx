import React, { useId, useState } from "react";

function FormValidation() {
  // Estado para almacenar los valores del formulario
  const [email, setEmail] = useState("");
  const [name, setName] = React.useState("");

  // Estado para almacenar el mensaje de validación(guardo el tipo de mensaje(error o exito) y el texto)
  const [message, setMessage] = useState({ type: "", text: "" });

  //useId para generar IDs únicos para los inputs y sus labels.
  const idBase = useId();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Comprobar que el campo de nombre no esté vacío. Si lo está, se muestra un mensaje de error.
    if (name.trim() === "") {
      setMessage({ type: "error", text: "El nombre es obligatorio." });
      return;
    }
    setMessage({ type: "success", text: "Formulario válido." });

    //Comprobar que el campo de correo electrónico contenga un "@" para validar su formato. Si no lo contiene, se muestra un mensaje de error.
    if (!email.includes("@")) {
      setMessage({
        type: "error",
        text: "El correo electrónico no es válido.",
      });
      return;
    }

    //Si el codigo llega a este punto, significa que ambos campos son válidos, por lo que se muestra un mensaje de éxito y se limpian los campos del formulario.
    setMessage({ type: "success", text: "Formulario válido." });

    //Opcional. Limpiar los campos del formulario después de una validación exitosa.
    setName("");
    setEmail("");
  };

  return (
    <div
      style={{ margin: "10px", border: "1px solid #141414", padding: "10px" }}
    >
      <h1>Validación de Formulario</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor={idBase + "-name"}>Nombre:</label>
        <input
          type="text"
          id={idBase + "-name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor={idBase + "-email"}>Correo Electrónico:</label>
        <input
          type="email"
          id={idBase + "-email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Enviar</button>
      </form>

      {/*Zona de mensajes de la interfaz.*/}

      {message.text && <p>{message.text}</p>}
    </div>
  );
}

export default FormValidation;

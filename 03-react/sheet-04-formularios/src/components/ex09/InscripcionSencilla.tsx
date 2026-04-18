import { useState, useId } from "react";

function InscripcionSencilla() {
  // 1. Un solo estado para todos los datos
  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    modalidad: "",
    aceptado: false,
  });

  // 2. Estado para el feedback al usuario (errores o éxito)
  const [mensaje, setMensaje] = useState({ tipo: "", texto: "" });

  const idBase = useId();

  // Manejador genérico para todos los inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDatos({
      ...datos,
      [name]: type === "checkbox" ? checked : value,
    });

    // Opcional: limpiar el mensaje de error cuando el usuario vuelve a escribir
    if (mensaje.texto) setMensaje({ tipo: "", texto: "" });
  };

  // Manejador del envío y validaciones
  const handleSubmit = (e) => {
    e.preventDefault();

    // Comprobaciones secuenciales (Early Return)
    if (datos.nombre.trim() === "") {
      return setMensaje({ tipo: "error", texto: "El nombre es obligatorio." });
    }

    if (!datos.email.includes("@") || !datos.email.includes(".")) {
      return setMensaje({
        tipo: "error",
        texto: "Por favor, introduce un email con formato válido.",
      });
    }

    if (datos.modalidad === "") {
      return setMensaje({
        tipo: "error",
        texto: "Debes elegir una modalidad de inscripción.",
      });
    }

    if (!datos.aceptado) {
      return setMensaje({
        tipo: "error",
        texto: "Debes aceptar las condiciones para continuar.",
      });
    }

    // Si pasamos todas las barreras, es un éxito
    setMensaje({
      tipo: "exito",
      texto: `¡Inscripción confirmada para ${datos.nombre} en la modalidad ${datos.modalidad}!`,
    });
  };

  return (
    <section
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "400px",
      }}
    >
      <h2>Formulario de Inscripción</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor={`${idBase}-nombre`} style={{ display: "block" }}>
            Nombre completo:
          </label>
          <input
            type="text"
            id={`${idBase}-nombre`}
            name="nombre"
            value={datos.nombre}
            onChange={handleChange}
            style={{ width: "100%", padding: "6px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor={`${idBase}-email`} style={{ display: "block" }}>
            Correo electrónico:
          </label>
          <input
            type="text"
            id={`${idBase}-email`}
            name="email"
            value={datos.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "6px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor={`${idBase}-modalidad`} style={{ display: "block" }}>
            Modalidad:
          </label>
          <select
            id={`${idBase}-modalidad`}
            name="modalidad"
            value={datos.modalidad}
            onChange={handleChange}
            style={{ width: "100%", padding: "6px" }}
          >
            <option value="">-- Selecciona una opción --</option>
            <option value="presencial">Presencial</option>
            <option value="online">Online (Streaming)</option>
            <option value="diferido">En diferido</option>
          </select>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <input
            type="checkbox"
            id={`${idBase}-aceptado`}
            name="aceptado"
            checked={datos.aceptado}
            onChange={handleChange}
          />
          <label htmlFor={`${idBase}-aceptado`}>
            {" "}
            Acepto las condiciones de la inscripción
          </label>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#333",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Inscribirse
        </button>
      </form>

      {/* Zona de renderizado condicional para los mensajes */}
      {mensaje.texto && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            borderRadius: "4px",
            backgroundColor: mensaje.tipo === "error" ? "#ffe6e6" : "#e6ffe6",
            color: mensaje.tipo === "error" ? "#cc0000" : "#006600",
            border: `1px solid ${mensaje.tipo === "error" ? "#cc0000" : "#006600"}`,
          }}
        >
          <strong>
            {mensaje.tipo === "error" ? "⚠️ Error:" : "✅ Éxito:"}
          </strong>{" "}
          {mensaje.texto}
        </div>
      )}
    </section>
  );
}

export default InscripcionSencilla;

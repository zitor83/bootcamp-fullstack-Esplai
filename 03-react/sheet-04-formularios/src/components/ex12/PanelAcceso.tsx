import { useState, useId } from "react";

function PanelAcceso() {
  // 1. ESTADO UNIFICADO para todos los datos del formulario
  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
    rol: "usuario",
    recordar: false,
  });

  // 2. Estado para el mensaje de feedback (error o éxito)
  const [mensaje, setMensaje] = useState({ tipo: "", texto: "" });

  const idBase = useId();

  // 3. Manejador genérico para todos los cambios en el formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCredenciales({
      ...credenciales,
      [name]: type === "checkbox" ? checked : value,
    });

    // Limpiamos el error en tiempo real al modificar cualquier campo
    if (mensaje.tipo === "error") setMensaje({ tipo: "", texto: "" });
  };

  // 4. ESTADO DERIVADO: Calculamos la seguridad de la contraseña en tiempo real sin necesidad de un estado adicional
  // Validacion simple basada en la longitud de la contraseña. Mejorar la validación con mayúsculas, números o caracteres especiales para mayor realismo.
  const calcularSeguridad = () => {
    const longitud = credenciales.password.length;
    if (longitud === 0) return "";
    if (longitud < 5) return "🔴 Débil";
    if (longitud < 8) return "🟡 Media";
    return "🟢 Fuerte";
  };

  // 5. Envío y Validaciones
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (
      !credenciales.email.includes("@") ||
      !credenciales.email.includes(".")
    ) {
      return setMensaje({
        tipo: "error",
        texto: "El formato del correo es inválido.",
      });
    }

    if (credenciales.password.length < 8) {
      return setMensaje({
        tipo: "error",
        texto: "La contraseña debe tener al menos 8 caracteres.",
      });
    }

    // Simulamos el éxito
    setMensaje({
      tipo: "exito",
      texto: `¡Acceso autorizado! Entrando como ${credenciales.rol.toUpperCase()}...`,
    });
  };

  return (
    <section
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "350px",
      }}
    >
      <h2>Panel de Acceso</h2>

      {/* Información en tiempo real */}
      {credenciales.email && (
        <p style={{ fontSize: "12px", color: "#666", marginBottom: "15px" }}>
          Intentando acceder con: <strong>{credenciales.email}</strong>
        </p>
      )}

      <form onSubmit={handleSubmit}>
        {/* Campo Email */}
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor={`${idBase}-email`}
            style={{ display: "block", fontSize: "14px" }}
          >
            Correo:
          </label>
          <input
            type="text"
            id={`${idBase}-email`}
            name="email"
            value={credenciales.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>

        {/* Campo Password + Medidor en tiempo real */}
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor={`${idBase}-password`}
            style={{ display: "block", fontSize: "14px" }}
          >
            Contraseña:
          </label>
          <input
            type="password"
            id={`${idBase}-password`}
            name="password"
            value={credenciales.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
          <span
            style={{ fontSize: "12px", display: "block", marginTop: "4px" }}
          >
            {calcularSeguridad()}
          </span>
        </div>

        {/* Selector de Rol */}
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor={`${idBase}-rol`}
            style={{ display: "block", fontSize: "14px" }}
          >
            Tipo de cuenta:
          </label>
          <select
            id={`${idBase}-rol`}
            name="rol"
            value={credenciales.rol}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          >
            <option value="usuario">Usuario Estándar</option>
            <option value="invitado">Invitado</option>
            <option value="admin">Administrador</option>
          </select>
        </div>

        {/* Casilla de verificación */}
        <div style={{ marginBottom: "20px", fontSize: "14px" }}>
          <input
            type="checkbox"
            id={`${idBase}-recordar`}
            name="recordar"
            checked={credenciales.recordar}
            onChange={handleChange}
          />
          <label htmlFor={`${idBase}-recordar`}>
            {" "}
            Mantener sesión iniciada
          </label>
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Iniciar Sesión
        </button>
      </form>

      {/* Mensajes de feedback */}
      {mensaje.texto && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            borderRadius: "4px",
            backgroundColor: mensaje.tipo === "error" ? "#ffe6e6" : "#e6ffe6",
            color: mensaje.tipo === "error" ? "#cc0000" : "#006600",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          {mensaje.texto}
        </div>
      )}
    </section>
  );
}

export default PanelAcceso;

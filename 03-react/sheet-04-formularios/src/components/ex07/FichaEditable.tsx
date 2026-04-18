import { useState, useId } from "react";

function FichaEditable() {
  // 1. UN SOLO ESTADO para toda la ficha (como un objeto con varias propiedades)
  const [ficha, setFicha] = useState({
    nombre: "",
    biografia: "",
    rol: "estudiante",
    publico: false,
  });

  const idBase = useId();

  // 2. Manejador de cambios genérico para todos los campos del formulario
  const handleChange = (e) => {
    // Extraemos el nombre del campo, su valor, tipo y estado de checkbox
    const { name, value, type, checked } = e.target;

    // Actualizamos el estado de la ficha, manteniendo lo que ya había y solo modificando el campo que cambió
    setFicha({
      ...ficha, // Copiamos lo que ya había
      [name]: type === "checkbox" ? checked : value, //
    });
  };

  return (
    <section style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
      {/* --- ZONA DE EDICIÓN --- */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
        }}
      >
        <h3>Editar Perfil</h3>

        {/* Campo de texto corto */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor={`${idBase}-nombre`}>Nombre:</label>
          <br />
          <input
            type="text"
            id={`${idBase}-nombre`}
            name="nombre"
            value={ficha.nombre}
            onChange={handleChange}
            style={{ width: "100%" }}
          />
        </div>

        {/* Campo de texto largo (textarea) */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor={`${idBase}-bio`}>Biografía:</label>
          <br />
          <textarea
            id={`${idBase}-bio`}
            name="biografia"
            value={ficha.biografia}
            onChange={handleChange}
            rows={3}
            style={{ width: "100%" }}
          />
        </div>

        {/* Selección (select) */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor={`${idBase}-rol`}>Rol en el sistema:</label>
          <br />
          <select
            id={`${idBase}-rol`}
            name="rol"
            value={ficha.rol}
            onChange={handleChange}
            style={{ width: "100%", padding: "5px" }}
          >
            <option value="estudiante">Estudiante</option>
            <option value="profesor">Profesor</option>
            <option value="admin">Administrador</option>
          </select>
        </div>

        {/* Casilla (checkbox) */}
        <div>
          <input
            type="checkbox"
            id={`${idBase}-publico`}
            name="publico"
            checked={ficha.publico}
            onChange={handleChange}
          />
          <label htmlFor={`${idBase}-publico`}> Hacer perfil público</label>
        </div>
      </div>

      {/* --- ZONA DE RESUMEN EN TIEMPO REAL --- */}
      <div
        style={{
          backgroundColor: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
        }}
      >
        <h3>Resumen en vivo</h3>
        <p>
          <strong>Nombre:</strong>{" "}
          {ficha.nombre || (
            <span style={{ color: "gray" }}>Sin especificar</span>
          )}
        </p>
        <p>
          <strong>Biografía:</strong>{" "}
          {ficha.biografia || (
            <span style={{ color: "gray" }}>Sin especificar</span>
          )}
        </p>
        <p>
          <strong>Rol:</strong> {ficha.rol}
        </p>
        <p>
          <strong>Estado de la cuenta: </strong>
          {ficha.publico ? (
            <span style={{ color: "green" }}> Pública</span>
          ) : (
            <span style={{ color: "red" }}> Privada</span>
          )}
        </p>
      </div>
    </section>
  );
}

export default FichaEditable;

import { useState, useId } from "react";

function BotonBloqueado() {
  // 1. Guardamos ÚNICAMENTE el texto que escribe el usuario
  const [email, setEmail] = useState("");

  const idEmail = useId();

  // 2. CALCULAMOS la condición al vuelo en cada renderizado.
  // No usamos setEstado, simplemente es una variable normal de JavaScript.
  const esEmailValido = email.includes("@") && email.includes(".");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Enviando email válidado: ${email}`);
  };

  return (
    <section
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "300px",
      }}
    >
      <h3>Suscripción</h3>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor={idEmail}
            style={{ display: "block", marginBottom: "5px" }}
          >
            Correo electrónico:
          </label>
          <input
            type="email"
            id={idEmail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ejemplo@correo.com"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>

        {/* 3. El botón depende de la variable calculada */}
        <button
          type="submit"
          disabled={!esEmailValido}
          style={{
            width: "100%",
            padding: "10px",
            cursor: esEmailValido ? "pointer" : "not-allowed",
            backgroundColor: esEmailValido ? "#007bff" : "#cccccc",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Confirmar correo
        </button>
      </form>
    </section>
  );
}

export default BotonBloqueado;

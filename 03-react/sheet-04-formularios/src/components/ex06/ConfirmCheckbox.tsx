import { useId, useState } from "react";

function ConfirmCheckbox() {
  // Estado para almacenar el estado del checkbox
  const [isChecked, setIsChecked] = useState(false);

  //useId para generar un ID único para el checkbox y su label.
  const idCheckbox = useId();
  return (
    <section
      style={{ margin: "10px", border: "1px solid #141414", padding: "10px" }}
    >
      <div>
        <input
          type="checkbox"
          id={idCheckbox}
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label htmlFor={idCheckbox}>
          He leído y acepto los términos y condiciones
        </label>
      </div>
      <p>Estado: {isChecked ? "Opcion Aceptada" : "Pendiente de aceptación"}</p>

      <button disabled={!isChecked}>Enviar</button>
    </section>
  );
}

export default ConfirmCheckbox;

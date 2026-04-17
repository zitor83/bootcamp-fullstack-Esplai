import React, { useState } from 'react'

function FormValidation() {
    const [email, setEmail] =useState("");
    const [name, setName] = React.useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {        e.preventDefault();
        if (name.trim() === "") {
            setError("El nombre no pude estar vacio.");
            return;
        }
        setError("");

  return (
    <div>
      <h1>Validación de Formulario</h1>
        <form>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />


            </form>

            <p>{error}</p>
    </div>
  )
}

export default FormValidation

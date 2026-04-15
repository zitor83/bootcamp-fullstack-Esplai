import  { useState } from 'react'

function Text() {
    const[originalText, setOriginalText] = useState(true);
    const text = originalText ? "Texto original" : "Texto cambiado";
  return (
    <div>
      <h2>Aqui se va a mostrar el texto original o el cambiado</h2>
      <p>{text}</p>
        <button onClick={() => setOriginalText(false)}>Cambiar texto</button>
        <button onClick={() => setOriginalText(true)}>Texto original</button>
    </div>
  )
}

export default Text

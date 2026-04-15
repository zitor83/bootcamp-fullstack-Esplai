import { useState } from "react";
import "./Textlight.css";

function TextLight() {
  const [isLight, setIsLight] = useState(true);
  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  return (
    <>
      <p className={isLight ? "light" : "dark"}>
        Este es un párrafo que cambia de apariencia
      </p>
      <button onClick={toggleTheme}>Cambiar apariencia</button>
    </>
  );
}

export default TextLight;

import "./App.css";
import MessageToggle from "./components/ex02/MessageToggle";
import SampleAccess from "./components/ex03/SampleAccess";
import TextAreaComponent from "./components/ex04/TextAreaComponent";
import FormValidation from "./components/ex05/FormValidation";
import ConfirmCheckbox from "./components/ex06/ConfirmCheckbox";
import FichaEditable from "./components/ex07/FichaEditable";
import InscripcionSencilla from "./components/ex09/InscripcionSencilla";
import BotonBloqueado from "./components/ex11/BotonBloqueado";
import PanelAcceso from "./components/ex12/PanelAcceso";

function App() {
  return (
    <>
      <h1>Ejercicio 02: MessageToggle</h1>
      <MessageToggle />
      <h1>Ejercicio 03: SampleAccess</h1>
      <SampleAccess />
      <h1>Ejercicio 04: TextAreaComponent</h1>
      <TextAreaComponent />
      <h1>Ejercicio 05: FormValidation</h1>
      <FormValidation />
      <h1>Ejercicio 06: ConfirmCheckbox</h1>
      <ConfirmCheckbox />
      <h1>Ejercicio 07: FichaEditable</h1>
      <FichaEditable />
      <h1>Ejercicio 09: InscripcionSencilla</h1>
      <InscripcionSencilla />
      <h1>Ejercicio 11: BotonBloqueado</h1>
      <BotonBloqueado />
      <h1>Ejercicio 12: Panel de Acceso</h1>
      <PanelAcceso />
    </>
  );
}

export default App;

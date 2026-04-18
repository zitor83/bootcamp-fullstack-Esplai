import "./App.css";
import MessageToggle from "./components/ex02/MessageToggle";
import SampleAccess from "./components/ex03/SampleAccess";
import TextAreaComponent from "./components/ex04/TextAreaComponent";
import FormValidation from "./components/ex05/FormValidation";
import ConfirmCheckbox from "./components/ex06/ConfirmCheckbox";
import FichaEditable from "./components/ex07/FichaEditable";
import InscripcionSencilla from "./components/ex09/InscripcionSencilla";

function App() {
  return (
    <>
      <MessageToggle />
      <SampleAccess />
      <TextAreaComponent />
      <FormValidation />
      <ConfirmCheckbox />
      <FichaEditable />
      <InscripcionSencilla />
    </>
  );
}

export default App;

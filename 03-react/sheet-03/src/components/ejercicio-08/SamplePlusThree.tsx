import { useState } from "react";

function SamplePlusThree() {
  const [value, setValue] = useState(0);
  function handleClick() {
    setValue((value) => value + 1);
    setValue((value) => value + 1);
    setValue((value) => value + 1);
  }
  return <button onClick={handleClick}>{value}</button>;
}
export default SamplePlusThree;

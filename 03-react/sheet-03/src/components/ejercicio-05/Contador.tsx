import  { useState } from 'react'

function Contador() {
    const[value, setValue] = useState(0);

    const increase = () => {
        setValue(value + 1);
    };
    const decrease =()=> {
        setValue(value - 1);
    };
    const reset = () => {
        setValue(0);
    };
  return (
    <div>
        <h2>Contador</h2>
        <div>El valor es: {value}</div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>

    </div>
  )
}

export default Contador

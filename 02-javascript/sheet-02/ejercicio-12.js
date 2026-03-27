// Reescribe el siguiente codigo: Con nombres mas claros,Encapsulando la logica de la funcion y haciendo q la funcion reciba el limite como parametro.
//Codigo Ejemplo
/*
let x = 0;
for (let i = 1; i <= 5; i++) {
x = x + i;
}
console.log(x);
*/
function calcularSuma(limite) {
    let suma = 0;
    for (let i = 1; i <= limite; i++) {
        suma += i;
    }
    return suma;
}
console.log(calcularSuma(5));
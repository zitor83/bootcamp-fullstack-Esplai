/*
*******************************
***** CODIGO DE EJEMPLO *******
*******************************
*/

// const a = 19;
// const b = true;
// const c = 50;
// const d = 10;
// if (a >= 18 && b) {
// console.log(c - d);
// } else {
// console.log(c);
// }

const edad = 19;
const tieneCarnet = true;
const precioOriginal = 50;
const descuento = 10;

if (edad >= 18 && tieneCarnet) {
    console.log(`Puedes conducir, tienes un descuento de ${descuento} €.`);
    console.log(`El precio final es: ${precioOriginal - descuento} €`);
} else {
    console.log("No puedes conducir, ningún descuento aplicado.");
    console.log(`El precio final es: ${precioOriginal} €`);
}
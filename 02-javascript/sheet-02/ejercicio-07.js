// Crea una función llamada esPar que reciba un número y devuelva true o false según
// corresponda. Después
// Usa esa función para comprobar varios números distintos.
//Requisitos:
//No muestres solo el resultado; intenta escribir mensajes descriptivos.
//La función debe devolver un booleano, no un texto.


const esPar =function(numero) {
    return numero % 2 === 0;
}
// Comprobamos varios números
console.log(`¿El número 4 es par?: ${esPar(4)}`); // true
console.log(`¿El número 7 es par?: ${esPar(7)}`); // false


//Crea una función llamada sumarHasta que reciba un número y devuelva la suma de todos los
// enteros desde 1 hasta ese número.

function sumarHasta(numero){
    let suma = 0;
    for(let i = 1; i <= numero; i++){
        suma += i;
    }
    return suma;

}

console.log(sumarHasta(5)); // Devuelve 15 (1 + 2 + 3 + 4 + 5)
console.log(sumarHasta(7)); // Devuelve 28 (1 + 2 + 3 + 4 + 5 + 6 + 7)
console.log(sumarHasta(-10)); // Devuelve 0 (No se suman números negativos)
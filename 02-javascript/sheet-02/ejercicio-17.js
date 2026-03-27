//Crea una función llamada crearContador que devuelva otra función.
//Cada vez que invoques la función devuelta, el contador debe incrementarse en una unidad.
function crearContador(numeroInicial) {
    let contador = numeroInicial;
    return function () {
        contador++;
        return contador;
    };
}

const contar = crearContador(76);

console.log(contar());
console.log(contar());
console.log(contar());
//Crea una función llamada crearContador que devuelva otra función.
//Cada vez que invoques la función devuelta, el contador debe incrementarse en una unidad.
function crearContador() {
    let contador = 0;
    return function () {
        contador++;
        return contador;
    };
}

  const contar= crearContador();

  console.log(contar());
  console.log(contar());
  console.log(contar());
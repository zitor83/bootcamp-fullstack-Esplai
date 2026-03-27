// Crea una función llamada mostrarRango que reciba dos números: inicio y fin .
//Debe mostrar todos los valores entre ambos, incluidos.

function mostrarRango(inicio, fin) {
    if (inicio > fin) {
        console.log("El número de inicio debe ser menor que el número de fin.");
        return;
    }

    for (let i = inicio; i <= fin; i++) {
        console.log(i);
    }
}

mostrarRango(3, 7); // Debería mostrar: 3, 4, 5, 6, 7
mostrarRango(10, 5); // Debería mostrar un mensaje de error
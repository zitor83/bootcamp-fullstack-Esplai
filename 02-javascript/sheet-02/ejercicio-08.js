//Crea una funcion llamada repetirMensaje que reciba: un texto y un numero de repeticiones.
//La funcion debe mostrar ese texto por consola tantas veces como se indique.

function repetirMensaje(texto, repeticiones) {
    for (let i = 0; i < repeticiones; i++) {
        console.log(texto);
    }
}

repetirMensaje("Hola, Pepe!", 3);
repetirMensaje("Adiós, Pepe!", 2);

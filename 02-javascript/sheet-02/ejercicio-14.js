//Crea una función llamada procesarNumero que reciba:Un numero y una función de callback. La función procesarNumero debe aplicar la función de callback al número recibido y devolver el resultado. Luego, crea dos funciones de callback: una que duplique el número y otra que lo triplique. Finalmente, llama a procesarNumero con un número y ambas funciones de callback, mostrando los resultados en la consola.

function procesarNumero(numero, callback) {
    return callback(numero);
}

function duplicar(num) {
    return num * 2;
}

function triplicar(num) {
    return num * 3;

}

console.log(procesarNumero(6, duplicar));

console.log(procesarNumero(6, triplicar));
// Crea una función llamada saludar que reciba un nombre y muestre un mensaje de saludo en
// consola.
function saludar(nombre){
    console.log(`Hola, ${nombre}! Bienvenido/a a JavaScript.`);
}
saludar("José");

//Crea una funcionque hace una llamada con un valor por defecto, si no se le pasa un valor, debe usar el valor por defecto.
function saludarConValorPorDefecto(nombre = "Amigo/a"){
    console.log(`Hola, ${nombre}! Bienvenido/a a JavaScript.`);
}
saludarConValorPorDefecto();
saludarConValorPorDefecto("José");
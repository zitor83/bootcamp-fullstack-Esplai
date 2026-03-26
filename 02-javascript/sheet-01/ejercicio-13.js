const nombre = "Carlos";
const producto= "libro";
const precioBase = 15.99;
const cantidadPedida = 3;
let stockDisponible = 5;
const tieneCupon = true;
let envioGratis = false;

if (cantidadPedida > stockDisponible) {
    console.log(`Lo siento ${nombre}, no hay suficiente stock de ${producto}.`);
} else {
    console.log(`Gracias ${nombre} por tu pedido de ${cantidadPedida} ${producto}(s).`);
    
    let subtotal = precioBase * cantidadPedida;
    console.log(`Subtotal: $${subtotal.toFixed(2)}`);
    
    let precioTotal = subtotal;
    
    if (tieneCupon) {
        let descuento = subtotal * 0.1; // Calculamos el 10%
        precioTotal -= descuento;
        console.log(`Descuento aplicado: -$${descuento.toFixed(2)}`);
    }
    
    
    if (!envioGratis) {
        precioTotal += 5;
        console.log(`Gastos de envío: $5.00`);
    } else {
        console.log(`Gastos de envío: ¡Gratis!`);
    }
    
    console.log(`-------------------------`);
    console.log(`El precio FINAL es: $${precioTotal.toFixed(2)}`);
    
    stockDisponible -= cantidadPedida;
    console.log(`Stock restante de ${producto}(s): ${stockDisponible}`);
}
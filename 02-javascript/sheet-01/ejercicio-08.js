let precio = 100;
let tieneCupon = true;
let esPremium = false;
let descuento = 0;

if(tieneCupon){
    descuento = descuento + 10
}
else if(!tieneCupon && esPremium){
    descuento = descuento + 5
}
else{
    descuento = 0
}

console.log("El precio original es: " + precio);
console.log("El descuento es: " + descuento + "€");
console.log("El precio final es: " + (precio - descuento) + "€");
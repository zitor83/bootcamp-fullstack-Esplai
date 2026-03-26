const nombreProducto="Monitor";
let cantidadDisponible=10;

if(cantidadDisponible===0){
    console.log(`El producto: ${nombreProducto}; está agotado.`);
}else if(cantidadDisponible>0 && cantidadDisponible<=5){
    console.log(`El producto: ${nombreProducto}; está en bajo stock.`);
}else{
    console.log(`El producto: ${nombreProducto}; está disponible.`);
}

const producto ={
    nombre: "Camiseta",
    precio: 20,
    disponible: true
}

producto.precio= 25;
producto.disponible= false;
producto.categoria= "Ropa";

delete producto.disponible;

console.log(producto);
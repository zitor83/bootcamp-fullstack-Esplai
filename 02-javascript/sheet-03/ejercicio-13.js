const producto ={
    nombre: "Camiseta",
    precio: 20,
    stock: 100
}
const productoActualizado = {
    ...producto,
    precio: 25,
    color: "rojo"
}
console.log(producto)
console.log(productoActualizado)
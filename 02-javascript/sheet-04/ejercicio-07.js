const listaProductos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 13
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 24
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 56
    }

]

const producto = listaProductos.find((objeto) => objeto.id === 2)

console.log(producto)
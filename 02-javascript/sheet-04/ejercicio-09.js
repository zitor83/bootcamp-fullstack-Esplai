const listaUsuarios = [
    {
        nombre: "Usuario1",
        activo: true
    },
    {
        nombre: "Usuario2",
        activo: false
    },
    {
        nombre: "Usuario3",
        activo: true
    },
    {
        nombre: "Usuario4",
        activo: true
    },
]
const hayInactivos=listaUsuarios.some(usuario => usuario.activo === false)

const todosActivos = listaUsuarios.every(usuario => usuario.activo ===true);

console.log(hayInactivos)

console.log(todosActivos);

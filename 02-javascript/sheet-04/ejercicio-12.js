const listaNotas = [2, 5, 8, 4, 4, 1, undefined, 9, 8]

const aprobadas = listaNotas.reduce((contador, nota) => {
    return nota >= 5 ? contador + 1 : contador
}, 0)


const tareaCompletada = listaNotas.reduce((contador, nota) => {
    return nota !== null && nota !== undefined ? contador + 1 : contador
}, 0)

console.log(aprobadas);

console.log(tareaCompletada)
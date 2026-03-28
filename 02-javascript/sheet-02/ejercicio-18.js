const numeroParticipantes = 0;

function validarParticipantes(numeroParticipantes) {
    return typeof numeroParticipantes !== "number" || numeroParticipantes <= 0
}


function generarTextoTurno(turnoInicial, mensajeBase) {
    return `Turno ${turnoInicial}: ${mensajeBase}`;

}


function textoEnMayusculas(texto) {
    console.log(texto.toUpperCase());
}

function textoEntreGuiones(texto) {
    console.log(`--- ${texto} ---`);
}

function organizarTurnos(numeroParticipantes, turnoInicial, mensajeBase, callback) {
    const validacion = validarParticipantes(numeroParticipantes);
    if (validacion) {
        return console.log("El número de participantes debe ser un número mayor que 0 y tener un formato correcto.");
    }
    for (let i = turnoInicial; i < turnoInicial + numeroParticipantes; i++) {
        const textoTurno = generarTextoTurno(i, mensajeBase);
        callback(textoTurno);
    }
}

organizarTurnos(3, 1, "Es tu turno", textoEnMayusculas);
organizarTurnos(3, 1, "Es tu turno", textoEntreGuiones);
organizarTurnos(0, 1, "Es tu turno", textoEnMayusculas);
organizarTurnos("Patata", 1, "Es tu turno", textoEntreGuiones);
organizarTurnos(-1, 1, "Es tu turno", textoEnMayusculas);
organizarTurnos(2, 3, "preparen sus armas", textoEntreGuiones);
organizarTurnos(2, 3, "preparen sus armas", textoEnMayusculas);
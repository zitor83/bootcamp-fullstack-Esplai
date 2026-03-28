const numeroParticipantes = 0;

function validarParticipantes(numeroParticipantes) {
   return typeof numeroParticipantes !== "number" || numeroParticipantes <= 0
    }


function generarTextoTurno(numeroTurno, mensajeBase) {
    return `Turno ${numeroTurno}: ${mensajeBase}`;

}

function textoEnMayusculas(texto) {
    console.log(texto.toUpperCase());
}

function textoEntreGuiones(texto) {
    console.log(`--- ${texto} ---`);
}

function organizarTurnos(numeroParticipantes, mensajeBase, callback) {
    const validacion = validarParticipantes(numeroParticipantes);
    if (validacion) {
        return console.log("El número de participantes debe ser un número mayor que 0 y tener un formato correcto.");
    }
    for (let i = 1; i <= numeroParticipantes; i++) {
        const textoTurno = generarTextoTurno(i, mensajeBase);
        callback(textoTurno);

    }
}

organizarTurnos(3, "Es tu turno", textoEnMayusculas);
organizarTurnos(3, "Es tu turno", textoEntreGuiones);
organizarTurnos(0, "Es tu turno", textoEnMayusculas);
organizarTurnos("Patata", "Es tu turno", textoEntreGuiones);
organizarTurnos(-1, "Es tu turno", textoEnMayusculas);
organizarTurnos(2, "preparen sus armas", textoEntreGuiones);
organizarTurnos(2, "preparen sus armas", textoEnMayusculas);
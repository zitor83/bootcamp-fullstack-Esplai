const nota= 4;


if (nota > 10 || nota < 0) {
    console.log("La nota debe ser un número entre 0 y 10.");
} else {
    if (nota < 5) {
        console.log("Suspenso");
    } else if (nota < 7) {
        console.log("Aprobado");
    } else if (nota < 9) {
        console.log("Notable");
    } else {
        console.log("Sobresaliente");
    }
}
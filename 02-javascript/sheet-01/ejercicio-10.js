const edad = 20;
const tieneEntrada = true;
const estaInvitada = false;
const esAcompañadaDeUnAdulto = false;

if (edad >= 18 && (tieneEntrada || estaInvitada)) {
    console.log("Acceso permitido.");
} else if (edad < 18 && esAcompañadaDeUnAdulto && tieneEntrada) {
    console.log("Acceso permitido con condicion.");
} else {
    console.log("Acceso denegado.");
}

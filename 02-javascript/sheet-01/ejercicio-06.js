let edad = 25;
const esVip= false;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

if (esVip) {
    console.log("Eres VIP.");
} else {
    console.log("No eres VIP.");
}

if (edad >= 18 && esVip) {
    console.log("Eres mayor de edad y VIP.");
} else {
    console.log("No eres mayor de edad o no eres VIP.");
}

if (edad >= 18 || esVip) {
    console.log("Eres mayor de edad o eres VIP.");
} else {
    console.log("No eres mayor de edad ni eres VIP.");
}

if (!esVip && edad < 18 ) {
    console.log("No eres VIP y eres menor de edad.");
} else {
    console.log("Eres VIP o eres mayor de edad.");
}
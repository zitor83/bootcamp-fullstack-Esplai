const perfil={
    nombre: "Juan",
    ciudad: null,
    email: undefined,
    numHijos: 0,
    esExtranjero: false,
    matriculaCoche: "",

}

const nombreMostrado= perfil.nombre ?? "No se ha proporcionado un nombre con ??";
const nombreMostrado2= perfil.nombre || "No se ha proporcionado un nombre con OR";

console.log(nombreMostrado);
console.log(nombreMostrado2);



const emailMostrado= perfil.email ?? "No se ha proporcionado un email con ??";
const emailMostrado2= perfil.email || "No se ha proporcionado un email con OR";

console.log(emailMostrado);
console.log(emailMostrado2);
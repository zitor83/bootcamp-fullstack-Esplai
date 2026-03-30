const alumno = {
    nombre: "Pepe",
    edad: 20,
    grupo: "Primero",
    activo: true
}

const{nombre,grupo}= alumno;

console.log(nombre);
console.log(grupo);

const{nombre:nombreAlumno}= alumno;

console.log(nombreAlumno);

const{edad,numAula= 14}= alumno;

console.log(edad);
console.log(numAula);
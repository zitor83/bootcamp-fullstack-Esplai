// explica por qué curso sí puede usarse dentro de la función;
// explica por qué mensaje no puede usarse fuera;
// añade un bloque if con una variable dentro y prueba a acceder a ella desde fuera.


const curso = "JavaScript";

function mostrarCurso() {
    const mensaje = `Estás en el curso de ${curso}`;

    console.log(mensaje);
    if (curso === "JavaScript") {
        const mensaje = "¡Bienvenido al curso de JavaScript!";
        console.log(mensaje);
    }
}
mostrarCurso();
console.log(`P:Explica por qué curso sí puede usarse dentro de la función
        R: Porque curso es una variable global, lo que significa que está disponible en todo el código, incluyendo dentro de funciones.
        Por lo tanto, la función mostrarCurso puede acceder a la variable curso sin ningún problema.`);


console.log(`P:Explica por qué curso no puede usarse fuera de la función
        R: La variable mensaje no puede usarse fuera de la función mostrarCurso porque está declarada dentro de esa función, lo que la convierte en una variable local. 
        Las variables locales solo existen dentro del ámbito de la función en la que se declaran, por lo que no pueden ser accedidas desde fuera de esa función.`);

        // añade un bloque if con una variable dentro y prueba a acceder a ella desde fuera.

if (curso === "JavaScript") {
    const mensajeIf = "¡Bienvenido al curso de JavaScript!";
    console.log(mensajeIf);
}
// console.log(mensajeIf);) 
// Esto generará un error porque mensajeIf es una variable local al bloque if y no puede ser accedida desde fuera de ese bloque.

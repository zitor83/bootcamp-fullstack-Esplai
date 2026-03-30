const catalogoCursos = [
    {
        titulo: "JavaScript",
        duracion: 40,
        nivel: "intermedio",
        activo: true
    },
    {
        titulo: "Python",
        duracion: 35,
        nivel: "principiante",
        activo: true
    },
    {
        titulo: "Java",
        duracion: 45,
        nivel: "avanzado",
        activo: false
    }
]

for (const curso of catalogoCursos) {
    console.log(`Curso: ${curso.titulo} | Duración: ${curso.duracion} horas | Nivel: ${curso.nivel} | Activo: ${curso.activo}`);
}
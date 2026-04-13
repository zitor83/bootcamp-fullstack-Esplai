import "./App.css";
// import CourseCard from "./components/ejercicio2/CourseCard";
import ProfileCard from "./components/ejercicio3/ProfileCard";

//Ejercicio 2: Crea un componente CourseCard que reciba props para el título del curso, nivel, duración y un botón para ver más detalles.
//Luego, utiliza este componente en tu App para mostrar una lista de cursos disponibles.
// function App() {
//   return (
//     <>
//       <CourseCard title="React desde cero" level="Intermedio" duration="6 semanas" buttonText="Ver curso" />
//       <CourseCard title="TypeScript desde cero" level="Avanzado" duration="4 semanas" buttonText="Ver curso" />
//       <CourseCard title="Node.js desde cero" level="Intermedio" duration="8 semanas" buttonText="Ver curso" />
//       <CourseCard title="Python para principiantes" level="Básico" duration="10 semanas" buttonText="Ver curso" />
//     </>
//   );
// }

function App() {
  return (
    <main className="profile-card">
      <ProfileCard
        name="Lucía"
        role="Frontend Developer"
        city="Madrid"
      ></ProfileCard>
      <ProfileCard
        name="Álvaro"
        role="Backend Developer"
        city="Sevilla"
      ></ProfileCard>
    </main>
  );
}
export default App;

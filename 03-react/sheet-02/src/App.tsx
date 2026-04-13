import "./App.css";
// import CourseCard from "./components/ejercicio2/CourseCard";
// import ProfileCard from "./components/ejercicio3/ProfileCard";
import TechCard from './components/ejercicio4/TechCard';

//EJERCICIO 2: Crea un componente CourseCard que reciba props para el título del curso, nivel, duración y un botón para ver más detalles.
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

//EJERCICIO 3: Crea un componente ProfileCard que reciba props para el nombre, rol y ciudad de una persona.
//  Luego, utiliza este componente en tu App para mostrar una lista de perfiles de personas.
// function App() {
//   return (
//     <main className="profile-card">
//       <ProfileCard
//         name="Lucía"
//         role="Frontend Developer"
//         city="Madrid"
//       ></ProfileCard>
//       <ProfileCard
//         name="Álvaro"
//         role="Backend Developer"
//         city="Sevilla"
//       ></ProfileCard>
//     </main>
//   );
// }

function App() {
  return (
    <article className="tech-card">
      <TechCard name="React" category="Frontend" description="Una biblioteca de JavaScript para construir interfaces de usuario" />
      <TechCard name="Node.js" category="Backend" description="Un entorno de ejecución de JavaScript del lado del servidor" />
      <TechCard name="TypeScript" category="Lenguaje de programación" description="Un superconjunto de JavaScript que añade tipado estático" />
      <TechCard name="Python" category="Lenguaje de programación" description="Un lenguaje de programación de alto nivel, fácil de aprender y versátil" />
    </article>
  );
}
export default App;

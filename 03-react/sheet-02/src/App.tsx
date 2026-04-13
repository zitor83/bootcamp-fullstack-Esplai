import "./App.css";
// import Panel from "./components/ejercicio7/Panel";
import Curso from "./components/ejercicio9/Curso";
//import ModuleCard from "./components/ejercicio5/ModuleCard";
// import CourseCard from "./components/ejercicio2/CourseCard";
// import ProfileCard from "./components/ejercicio3/ProfileCard";
// import TechCard from "./components/ejercicio4/TechCard";

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

// function App() {
//   return (
//     <article className="tech-card">
//       <TechCard name="React" category="Frontend" description="Una biblioteca de JavaScript para construir interfaces de usuario" />
//       <TechCard name="Node.js" category="Backend" description="Un entorno de ejecución de JavaScript del lado del servidor" />
//       <TechCard name="TypeScript" category="Lenguaje de programación" description="Un superconjunto de JavaScript que añade tipado estático" />
//       <TechCard name="Python" category="Lenguaje de programación" description="Un lenguaje de programación de alto nivel, fácil de aprender y versátil" />
//     </article>
//   );
// function App() {
//   return (
//     <>
//       <h1>Módulos del bootcamp</h1>
//       <article className="module-grid">
//         <ModuleCard name="Introducción a React" sessions={5} level="Básico" description="Aprende los fundamentos de React" />
//         <ModuleCard name="Componentes en React" sessions={7} level="Intermedio" description="Descubre cómo crear componentes reutilizables" />
//         <ModuleCard name="Hooks en React" sessions={8} level="Avanzado" description="Domina los hooks para gestionar el estado y los efectos secundarios" />
//         <ModuleCard name="Estilos en React" sessions={4} level="Básico" description="Aprende a aplicar estilos en tus componentes de React" />
//         <ModuleCard name="Estado y Props en React" sessions={6} level="Intermedio" description="Entiende cómo gestionar el estado y pasar props entre componentes" />
//       </article>
//     </>
//   );
// }
// function App() {
//   return (
//     <>
//       <h1>Ejemplos de Composicion con Children</h1>
//       <Panel>
//         <h1>Ejemplo de Panel</h1>
//         <p>
//           Este es un ejemplo de composición utilizando el prop children en
//           React. El componente Panel actúa como un contenedor que puede envolver
//           cualquier contenido que se le pase como children. En este caso,
//           estamos pasando un párrafo como contenido dentro del Panel.
//         </p>
//       </Panel>
//       <Panel>
//         <ul>
//           <li>Elemento 1</li>
//           <li>Elemento 2</li>
//           <li>Elemento 3</li>
//         </ul>
//       </Panel>
//       <Panel>
//         <button type="button">Pulsame</button>
//         <input type="checkbox" name="consentimiento"  />
//         <p>Al pulsar doy mi consentimiento</p>
//       </Panel>
//     </>
//   );
function App() {
  return (
    <>
      <h1>Título de sección</h1>
      <p>
        Este es un párrafo de ejemplo y describe el contenido de la sección.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, totam
        iure deleniti atque quisquam aperiam voluptatibus saepe. Maxime aperiam
        aut ipsam eos? At dolores est, dolore sequi laboriosam libero quis.
      </p>

      <Curso
        title="Introducción a React"
        level="Básico"
        duration="4 semanas"
        modality="Presencial"
        textAction="Ver curso"
      />
      <Curso
        title="Componentes en React"
        level="Intermedio"
        duration="6 semanas"
        modality="Virtual"
        textAction="Apúntate al curso"
      />
      <Curso
        title="Hooks en React"
        level="Avanzado"
        duration="8 semanas"
        modality="Presencial"
        textAction="Inscribite al curso"
      />
      <Curso
        title="Estado y Props en React"
        level="Intermedio"
        duration="5 semanas"
        modality="Virtual"
        textAction="Mira este curso"
      />
      <Curso
        title="Estilos en React"
        level="Básico"
        duration="3 semanas"
        modality="Presencial"
        textAction="Apúntate a este curso"
      />
      <Curso
        title="React Router"
        level="Intermedio"
        duration="4 semanas"
        modality="Virtual"
        textAction="Ven a este curso"
      />
    </>
  );
}
export default App;

function Curso(props: {
  title: string;
  level: string;
  duration: string;
  modality: string;
  textAction: string;
}) {
  return (
    <article className="course-card">
      <h2>{props.title}</h2>
      <p>Nivel: {props.level}</p>
      <p>Duración: {props.duration} semanas</p>
      <p>Modalidad: {props.modality}</p>
      <button>{props.textAction}</button>
    </article>
  );
}
export default Curso;

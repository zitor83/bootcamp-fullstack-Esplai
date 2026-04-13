

 function ModuleCard(props : {
    name: string;
    sessions: number;
    level: string;
    description: string;
 }) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Sesiones: {props.sessions}</p>
      <p>Nivel: {props.level}</p>
      <p>Descripción: {props.description}</p>
    </div>
  );
}

export default ModuleCard

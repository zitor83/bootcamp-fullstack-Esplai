function StudentCardA(props : { name: string; age: number; city: string }) {
  return (
    <article className="student-card">
      <h2>{props.name}</h2>
      <p>Edad: {props.age}</p>
      <p>Ciudad: {props.city}</p>
    </article>
  );
}

export default StudentCardA
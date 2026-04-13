function StudentCardB({name,age,city}: { name: string; age: number; city: string }) {
  return (
    <article className="student-card">
      <h2>{name}</h2>
      <p>Edad: {age}</p>
      <p>Ciudad: {city}</p>
    </article>
  );
}

export default StudentCardB
function CourseCard(props : { title: string; level: string; duration: string; buttonText: string }) {
  const { title, level, duration, buttonText } = props;
  
  return (
    <article className="course-card">
      <h2>{title}</h2>
      <p>Nivel: {level}</p>
      <p>Duración: {duration}</p>
      <button>{buttonText}</button>
    </article>
  );
}
export default CourseCard;

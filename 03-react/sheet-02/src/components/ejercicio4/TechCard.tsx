function TechCard(props: {
  name: string;
  category: string;
  description: string;
}) {
  return (
    <section className="tech-card-gallery">
      <h1>{props.name}</h1>
      <h2>{props.category}</h2>
      <p>{props.description}</p>
    </section>
  );
}
export default TechCard;

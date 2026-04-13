function InfoCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <h2>{title}</h2>
      <p>{description}</p>
    </>
  );
}
export default InfoCard;

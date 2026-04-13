function InfoCardContainer({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
}
export default InfoCardContainer;

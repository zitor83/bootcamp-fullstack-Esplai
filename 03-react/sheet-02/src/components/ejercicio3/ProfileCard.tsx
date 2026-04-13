function ProfileCard(props: { name: string; role: string; city: string }) {
  return (
    <section className="profile-card">
      <h2>{props.name}</h2>
      <p>{props.role}</p>
      <p>{props.city}</p>
    </section>
  );
}
export default ProfileCard;

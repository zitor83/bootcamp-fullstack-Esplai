function WelcomeCard() {
  return (
    <section className="card">
      <img src="https://via.placeholder.com/150" alt="Imagen de bienvenida" />
      <h2>Bienvenido al bloque de React</h2>
      <p>Hoy empiezas a trabajar con JSX y componentes.</p>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" />
    </section>
  );
}
export default WelcomeCard;

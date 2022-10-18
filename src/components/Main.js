const Main = ({ theme }) => {
  return (
    <main className={theme}>
      <p>Bienvenido/a invitado/a</p>
      <p>Hola usuario/a</p>
      <div className="descripcion">
        <img src="https://placeimg.com/300/300/tech" alt="tech" />
        <br />
        <div
          style={{
            textAlign: "left",
          }}
        >
          <span>
            Mi contenido principal. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Distinctio recusandae facilis ducimus perspiciatis
            minus neque consectetur itaque, laudantium nobis officiis numquam
            modi provident excepturi est eligendi! Explicabo similique corporis
            beatae.
          </span>
        </div>
      </div>
    </main>
  );
};

export default Main;

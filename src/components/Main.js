const Main = ({ theme, texts, auth }) => {
  return (
    <main className={theme}>
      {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
      <div className="descripcion">
        {auth ? (
          <img
            src="./assets/user-icon.png"
            alt="user"
            style={{
              maxWidth: "100%",
            }}
          />
        ) : (
          <img src="https://placeimg.com/300/300/tech" alt="tech" />
        )}

        <br />
        <div
          style={{
            textAlign: "left",
          }}
        >
          <span>{texts.mainContent}</span>
        </div>
      </div>
    </main>
  );
};

export default Main;

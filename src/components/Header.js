const Header = ({ theme, handleTheme }) => {
  return (
    <header className={theme}>
      <h2>Mi aplicación SIN Context API</h2>
      <h3>HEADER</h3>

      <select name="language">
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>

      <label htmlFor="light">Claro</label>
      <input
        type="radio"
        name="theme"
        id="light"
        onClick={handleTheme}
        value="light"
      />
      <label htmlFor="dark">Oscuro</label>
      <input
        type="radio"
        name="theme"
        id="dark"
        onClick={handleTheme}
        value="dark"
      />

      <button>Iniciar Sesión</button>
    </header>
  );
};

export default Header;

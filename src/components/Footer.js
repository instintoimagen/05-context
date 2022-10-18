const Footer = ({ theme }) => {
  return (
    <footer className={theme}>
      <h4>El Footer</h4>
      <span>
        © Copyright 2022 - Desarrollado por{" "}
        <a href="https://sergioortega.com.ar">Sergio Ortega</a>
      </span>
      <div>
        <span>Contacto:</span>
        <ul>
          <li>Github</li>
          <li>Linked-in</li>
          <li>Instagram</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

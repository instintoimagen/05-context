import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

let initialTheme = "light";
let initialLanguage = "es";
let initialAuth = null;

const translations = {
  es: {
    headerTitle: "Mi aplicación SIN Context API",
    headerSubtitle: "Encabezado",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenid@ invitad@",
    mainHello: "Hola Usuari@",
    mainContent:
      "Mi contenido principal. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio recusandae facilis ducimus perspiciatis  minus neque consectetur itaque, laudantium nobis officiis numquam  modi provident excepturi est eligendi! Explicabo similique corporis beatae.",
    footerTitle: "El Footer",
    footerCenter: [
      <>
        <span>© Copyright 2022 - Desarrollado por: </span>
        <a href="https://sergioortega.com.ar" target="_bank" rel="noreferrer">
          Sergio Ortega
        </a>
      </>,
    ],
    footerContact: "Contacto",
    footerSocial: [
      <a
        href="https://github.com/instintoimagen"
        target="_bank"
        rel="noreferrer"
      >
        Github
      </a>,
      <a
        href="https://linkedin.com/in/sergioortegadev"
        target="_bank"
        rel="noreferrer"
      >
        linked-in
      </a>,
      <a
        href="https://instagram.com/sergio.instintoimagen"
        target="_bank"
        rel="noreferrer"
      >
        Instagram
      </a>,
    ],
  },
  en: {
    headerTitle: "My application WITHOUT Context API",
    headerSubtitle: "HEADER",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent:
      "My main content in english. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio recusandae facilis ducimus perspiciatis  minus neque consectetur itaque, laudantium nobis officiis numquam  modi provident excepturi est eligendi! Explicabo similique corporis beatae.",
    footerTitle: "My footer",
    footerCenter: [
      <>
        <span>© Copyright 2022 - Developer by: </span>
        <a href="https://sergioortega.com.ar" target="_bank" rel="noreferrer">
          Sergio Ortega
        </a>
      </>,
    ],
    footerContact: "Contact",
    footerSocial: [
      <a
        href="https://github.com/instintoimagen"
        target="_bank"
        rel="noreferrer"
      >
        Github
      </a>,
      <a
        href="https://linkedin.com/in/sergioortegadev"
        target="_bank"
        rel="noreferrer"
      >
        linked-in
      </a>,
      <a
        href="https://instagram.com/sergio.instintoimagen"
        target="_bank"
        rel="noreferrer"
      >
        Instagram
      </a>,
    ],
  },
};

const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme);

  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const [auth, setAuth] = useState(initialAuth);

  const handleTheme = (e) => {
    console.log(e.target.value);
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const handleLanguage = (e) => {
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };

  const handleAuth = (e) => {
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  return (
    <div className="my-page">
      <Header
        theme={theme}
        handleTheme={handleTheme}
        texts={texts}
        handleLanguage={handleLanguage}
        auth={auth}
        handleAuth={handleAuth}
      />
      <Main theme={theme} texts={texts} auth={auth} />
      <Footer theme={theme} texts={texts} />
    </div>
  );
};

export default MyPage;

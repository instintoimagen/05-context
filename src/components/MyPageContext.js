import { useState } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

let initialLanguage = "es";
let initialAuth = null;

const translations = {
  es: {
    headerTitle: "Mi aplicación CON Context API",
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
    footerCenter: "© Copyright 2022 - Desarrollado por Sergio Ortega",
    footerCenterDev: [
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
    headerTitle: "My application WITH Context API",
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
    footerCenter: "© Copyright 2022 - Developer by Sergio Ortega",
    footerCenterDev: [
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

const MyPageContext = () => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const [auth, setAuth] = useState(initialAuth);

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
      <ThemeProvider>
        <HeaderContext
          texts={texts}
          handleLanguage={handleLanguage}
          auth={auth}
          handleAuth={handleAuth}
        />
        <MainContext texts={texts} auth={auth} />
        <FooterContext texts={texts} />
      </ThemeProvider>
    </div>
  );
};

export default MyPageContext;

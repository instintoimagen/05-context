import { createContext, useState } from "react";

const LangContext = createContext();

const LangProvider = ({ children }) => {
  let initialLanguage = "es";
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

  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const handleLanguage = (e) => {
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };

  const data = { texts, handleLanguage };

  return <LangContext.Provider value={data}>{children}</LangContext.Provider>;
};

export { LangProvider };
export default LangContext;

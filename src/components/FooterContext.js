import { useContext } from "react";
import ThemeConext from "../context/ThemeContext";

const FooterContext = ({ texts }) => {
  const { theme } = useContext(ThemeConext);

  return (
    <footer className={theme}>
      <h4>{texts.footerTitle}</h4>
      <span>{texts.footerCenter}</span>
      <div>
        <span>{texts.footerContact}</span>
        <ul>
          <li>{texts.footerSocial[0]}</li>
          <li>{texts.footerSocial[1]}</li>
          <li>{texts.footerSocial[2]}</li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterContext;

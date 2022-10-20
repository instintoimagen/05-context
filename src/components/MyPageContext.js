import { ThemeProvider } from "../context/ThemeContext";
import { LangProvider } from "../context/LangContext";
import { AuthProvider } from "../context/AuthContext";
import FooterContext from "./FooterContext";
import HeaderContext from "./HeaderContext";
import MainContext from "./MainContext";

const MyPageContext = () => {
  return (
    <div className="my-page">
      <ThemeProvider>
        <LangProvider>
          <AuthProvider>
            <HeaderContext />
            <MainContext />
            <FooterContext />
          </AuthProvider>
        </LangProvider>
      </ThemeProvider>
    </div>
  );
};

export default MyPageContext;

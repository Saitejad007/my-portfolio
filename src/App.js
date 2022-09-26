import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import NavMenu from "./components/NavMenu";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { createTheme, ThemeProvider } from "@mui/material";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    common: { black: "#000000", white: "#ffffff" },
    primary: {
      main: "#ffffff",
      light: "#212121",
      contrastText: "#171717",
    },
    secondary: {
      main: "#212121",
      dark: "#171717",
      light: "#ffffff",
      contrastText: "#ffffff",
    },
    info: { main: "#fff" },
    text: { primary: "#171717", secondary: "#ffffff" },
    action: { hover: "#212121", active: "#ffffff" },
  },
  shape: { borderRadius: 0 },
  typography: {
    fontFamily: ["Space Grotesk", "sans-serif"],
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    button: {
      textTransform: "uppercase",
      fontWeight: 700,
      fontFamily: ["Space Grotesk", "sans-serif"],
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavMenu />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};

export default App;

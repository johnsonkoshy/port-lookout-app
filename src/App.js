import "./styles.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Home from "./Home";
import Header from "./Header";
import Details from "./Details";
import Login from "./Login";
import Signup from "./Login/Signup";
import { GoogleReCaptchaProvider, GoogleReCaptcha} from 'react-google-recaptcha-v3';
import {GlobalAppContext, GlobalAppContextProvider} from "./context/GlobalAppContext";


const RECAPTCHA_KEY = process.env.REACT_APP_RECAPTCHA_KEY

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  
  const {setToken} = React.useContext(GlobalAppContext);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light"
        }
      }),
    [prefersDarkMode]
  );
  return (
    <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="details/:portid" element={<Details />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Routes>
        </ThemeProvider>
      </BrowserRouter>
    
  );
}

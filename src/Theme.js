import React, { useState, useEffect } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import rtl from "jss-rtl";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/styles";
import { useSelector } from "react-redux";
import App from "./containers/App";

function ThemeApp() {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const lang = useSelector((state) => state.lang);
  const [direction, setDirection] = useState(lang === "en" ? "ltr" : "rtl");
  useEffect(() => {
    setDirection(lang === "en" ? "ltr" : "rtl");
  }, [lang]);
  const theme = createMuiTheme({
    direction: direction,
    palette: {
      primary: {
        main: "#231f21",
      },
      secondary: {
        main: "#f3c623",
      },
    },
    typography: {
      fontFamily: [
        "Nunito-Regular",
        "Tajawal-Regular",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      button: {
        textTransform: "initial",
        fontFamily: ["Nunito-SemiBold", "Tajawal-Medium"].join(","),
      },
    },
  });
  document.body.dir = direction;
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StylesProvider>
  );
}

export default ThemeApp;

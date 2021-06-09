import React from "react";
import { Router } from "react-router-dom";
import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
import Routes from "../routes";
import messages from "../assets/local/messages";
import history from "../routes/history";
import Loader from "../components/Loader/Loader";
import { MaterialSnackbar } from "../components/Snackbar/Snackbar";
import "./App.scss";

const App = () => {
  const loading = useSelector((state) => state.loader);
  const lang = useSelector((state) => state.lang);
  return (
    <IntlProvider locale={lang} messages={messages[lang]}>
      <div
        className={lang === "ar" ? "rtl" : "ltr"}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <MaterialSnackbar />
        <Router history={history}>{loading ? <Loader /> : Routes}</Router>
      </div>
    </IntlProvider>
  );
};

export default App;

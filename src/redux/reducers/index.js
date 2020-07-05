import { combineReducers } from "redux";
import lang from "./lang";
import loader from "./loader";
import snackbar from "./snackbar";
import auth from "./auth";

export default combineReducers({
  lang,
  loader,
  snackbar,
  auth
});

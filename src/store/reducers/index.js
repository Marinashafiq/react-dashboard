import { combineReducers } from "redux";
import lang from "../lang/reducer";
import loader from "../loader/reducer";
import snackbar from "../snackbar/reducer";
import auth from "../auth/reducer";

export default combineReducers({
  lang,
  loader,
  snackbar,
  auth
});
import store from "../redux/store";
import { showSnackbarAction } from "../redux/actions/snackbar";
import messages from '../assets/local/messages';

export function dispatchSnackbarError(data) {
  if (data) {
    const errorMsg = data.error.message;
    store.dispatch(showSnackbarAction(errorMsg, "error"));
  }
}
export function dispatchSnackbarSuccess(message) {
  const lang = store.getState().language.lang;
  store.dispatch(
    showSnackbarAction(messages[lang].snackbar[message], "success")
  );
}


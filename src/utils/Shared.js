import store from "../store";
import { showSnackbarAction } from "../store/snackbar/actions";
import messages from '../assets/Local/messages';

export function dispatchSnackbarError(data) {
  if (data) {
    const errorMsg = data?.error?.message;
    store.dispatch(showSnackbarAction(errorMsg, "error"));
  }
}
export function dispatchSnackbarSuccess(message) {
  const lang = store.getState().language.lang;
  store.dispatch(
    showSnackbarAction(messages[lang].snackbar[message], "success")
  );
}


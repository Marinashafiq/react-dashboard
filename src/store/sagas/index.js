import { all } from "redux-saga/effects";
import { authSagas } from "../authentication/sagas";

export function* watchSagas() {
  yield all([authSagas()]);
}

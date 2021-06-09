import { all } from "redux-saga/effects";
import { authSagas } from "../auth/sagas";

export function* watchSagas() {
  yield all([authSagas()]);
}

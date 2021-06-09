import { all } from "redux-saga/effects";
import { authSagas } from "../Auth/sagas";

export function* watchSagas() {
  yield all([authSagas()]);
}

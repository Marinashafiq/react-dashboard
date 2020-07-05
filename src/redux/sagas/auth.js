import { call, put , takeLatest } from "redux-saga/effects";
import API from "../../api/auth";
import * as ACTIONS from "../actions/auth";
import { dispatchSnackbarError } from "../../utlis/shared";
import * as TYPES from "../types/auth";

export function* login() {
  try {
    const response = yield call(API.login);
    yield put(ACTIONS.loginReceive(response.data));
  } catch (err) {
    dispatchSnackbarError(err.response.data);
  }
}



export function* authSagas() {
  yield takeLatest(TYPES.LOGIN_REQUEST, login);
}

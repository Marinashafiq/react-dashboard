import { call, put, takeLatest } from "redux-saga/effects";
import API from "../../api/auth";
import * as ACTIONS from "../actions/auth";
import { dispatchSnackbarError } from "../../utlis/shared";
import * as TYPES from "../types/auth";
import history from "../../routes/history";

export function* login({ payload }) {
  localStorage.setItem("token", "token");
  history.push("/");
  try {
    const response = yield call(API.login, payload);
    yield put(ACTIONS.loginReceive(response.data));
  } catch (err) {
    dispatchSnackbarError(err.response.data);
  }
}

export function* forgetPassword({ payload }) {
  try {
    yield call(API.forgetPassword, payload);
  } catch (err) {
    dispatchSnackbarError(err.response.data);
  }
}

export function* resetPassword({ payload }) {
  try {
    yield call(API.resetPassword, payload);
  } catch (err) {
    dispatchSnackbarError(err.response.data);
  }
}

export function* authSagas() {
  yield takeLatest(TYPES.LOGIN_REQUEST, login);
  yield takeLatest(TYPES.FORGET_PASSWORD_REQUEST, forgetPassword);
  yield takeLatest(TYPES.RESET_PASSWORD_REQUEST, resetPassword);
}

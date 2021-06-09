import * as TYPES from "./types";

export const loginRequest = (payload) => ({
  type: TYPES.LOGIN_REQUEST,
  payload,
});
export const loginReceive = (payload) => ({
  type: TYPES.LOGIN_RECEIVE,
  payload,
});
export const forgetPasswordRequest = (payload) => ({
  type: TYPES.FORGET_PASSWORD_REQUEST,
  payload,
});
export const resetPasswordRequest = (payload) => ({
  type: TYPES.RESET_PASSWORD_REQUEST,
  payload,
});
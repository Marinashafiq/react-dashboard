import * as TYPES from "../types/auth";

export const loginRequest = (payload) => ({
  type: TYPES.LOGIN_REQUEST,
  payload,
});

export const loginReceive = (payload) => ({
  type: TYPES.LOGIN_RECEIVE,
  payload,
});

import * as TYPES from "../types/auth";
import History from "../../routes/history";

export const loginRequest = (payload) => {
  localStorage.setItem("token", "token");
  History.push("/");
  return {
    type: TYPES.LOGIN_REQUEST,
    payload,
  };
};

export const loginReceive = (payload) => ({
  type: TYPES.LOGIN_RECEIVE,
  payload,
});

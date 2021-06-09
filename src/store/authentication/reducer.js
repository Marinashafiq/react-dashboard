import * as TYPES from "./types";

export default function authReducer (state = {}, action) {
  switch (action.type) {
    case TYPES.LOGIN_RECEIVE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
import * as TYPES from "./types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
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
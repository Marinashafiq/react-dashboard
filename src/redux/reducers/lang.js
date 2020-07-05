import * as TYPES from "../types";

const INITIAL_STATE = "en";

export default function language(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TYPES.SET_LANG:
      return action.payload;
    case TYPES.GET_LANG:
      return action.payload;
    default:
      return state;
  }
}

import * as TYPES from "../types";

const INITIAL_STATE = false;

const loader = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SHOW_LOADER:
      return action.data;
    case TYPES.HIDE_LOADER:
      return action.data;
    default:
      return state;
  }
};

export default loader;

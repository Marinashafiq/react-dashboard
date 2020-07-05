import * as TYPES from "../types";

const snackbar = (state = {}, action) => {
  switch (action.type) {
    case TYPES.SHOW_SNACKBAR:
      return {
        ...state,
        isOpen: true,
        message: action.message,
        type: action.snacknarType,
      };
    case TYPES.HIDE_SNACKBAR:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default snackbar;

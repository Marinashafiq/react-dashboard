import * as TYPES from "../types";

export const showSnackbarAction = (message, snacknarType) => {
  return {
    type: TYPES.SHOW_SNACKBAR,
    message,
    snacknarType,
  };
};

export const hideSnackbarAction = () => {
  return {
    type: TYPES.HIDE_SNACKBAR,
  };
};

import * as TYPES from "../types";

export const loader = (bool) => {
  return bool
    ? {
        type: TYPES.SHOW_LOADER,
        data: bool,
      }
    : {
        type: TYPES.HIDE_LOADER,
        data: bool,
      };
};

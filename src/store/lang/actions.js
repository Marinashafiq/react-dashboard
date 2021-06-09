import * as TYPES from "./types";

export const setLanguage = (payload) => {
  localStorage.setItem("lang", payload);
  return { type: TYPES.SET_LANG, payload };
};

export const getLanguage = () => ({
  type: TYPES.GET_LANG,
});
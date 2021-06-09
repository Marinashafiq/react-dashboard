import { axiosInstance } from "../../network";
// Replace endpoint and change api name
export const login = async () => {
  return await axiosInstance.post(`ENDPOINT`);
};

export const forgetPassword = async () => {
  return await axiosInstance.post(`ENDPOINT`);
};


export const resetPassword = async () => {
  return await axiosInstance.post(`ENDPOINT`);
};


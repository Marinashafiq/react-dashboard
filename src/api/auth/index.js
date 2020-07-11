import { axiosInstance } from "../config";
// Replace endpoint and change api name
const login = async () => {
  return await axiosInstance.post(`ENDPOINT`);
};

const forgetPassword = async () => {
  return await axiosInstance.post(`ENDPOINT`);
};


const resetPassword = async () => {
  return await axiosInstance.post(`ENDPOINT`);
};

export default {
  login,
  forgetPassword,
  resetPassword
};

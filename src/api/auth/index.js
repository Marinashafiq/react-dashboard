import { axiosInstance } from "../config";
// Replace endpoint and change api name
const login = async () => {
  return await axiosInstance.post(`ENDPOINT`);
};

export default {
  login,
};

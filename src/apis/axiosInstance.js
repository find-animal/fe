import axios from "axios";
import { toast } from "react-toastify";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.code === 30000) {
      toast.error("로그인 정보가 만료되었습니다. 다시 로그인해주세요.");
      window.location.href = "/login";
      localStorage.removeItem("token");
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;

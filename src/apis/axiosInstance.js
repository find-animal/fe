import axios from "axios";

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
    const { status, data } = error.response;

    if (status === 401) {
      if (
        data.message === "Invalid JWT Token" ||
        data.message === "Expired JWT Token"
      ) {
        window.location.href = "/login";
        localStorage.removeItem("token");
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;

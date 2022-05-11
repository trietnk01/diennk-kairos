import axios from "axios";
import authService from "./authService";
export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT,
  timeout: 5000,
  showLoading: false,
});
export default function initRequest() {
  axiosInstance.interceptors.request.use(
    function (config) {
      const accessToken = authService.getAccessToken();
      if (accessToken) {
        config.headers["x-auth-token"] = accessToken;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error.response);
    }
  );
}

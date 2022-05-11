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
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosInstance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
}

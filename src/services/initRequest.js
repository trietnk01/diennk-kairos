import axios from "axios";
import { END_POINT } from "configs";
import store from "redux/store";
import loadingSlice from "slices/loadingSlice";
import auth_service from "./authService";
const item_axios = {
  baseURL: END_POINT.API_ENDPOINT,
  timeout: 5000,
  showSpinner: false,
};
export const axios_instance = axios.create(item_axios);
function initRequest() {
  let requestCount = 0;
  function decreaseRequestCount() {
    requestCount = requestCount - 1;
    if (requestCount === 0) {
      store.dispatch(loadingSlice.actions.hideSpinner());
    }
  }
  axios_instance.interceptors.request.use(
    function (config) {
      if (config.showSpinner) {
        requestCount++;
        store.dispatch(loadingSlice.actions.showSpinner());
      }
      const accessToken = auth_service.getAccessToken();
      if (accessToken) {
        config.headers["x-auth-token"] = accessToken;
      }
      return config;
    },
    function (err) {
      if (err.config.showSpinner) {
        decreaseRequestCount();
      }
      return Promise.reject(err);
    }
  );

  // Add a response interceptor
  axios_instance.interceptors.response.use(
    function (res) {
      if (res.config.showSpinner) {
        decreaseRequestCount();
      }
      return res;
    },
    function (err) {
      if (err.config.showSpinner) {
        decreaseRequestCount();
      }
      return Promise.reject(err.response);
    }
  );
}
export default initRequest;

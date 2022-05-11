import http_request from "services/httpRequest";
export const loginUser = async (url, bodyData = {}) => {
  return http_request.post(url, bodyData, {
    showLoading: true,
  });
};

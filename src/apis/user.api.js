import http_request from "services/httpRequest";
export const loginUser = async (url, bodyData = {}) => {
  return http_request.post(url, bodyData, {
    showLoading: true,
  });
};
export const authenticated = async (url, accessToken) => {
  return http_request.post(
    url,
    {},
    {
      headers: {
        "x-auth-token": accessToken,
      },
    }
  );
};

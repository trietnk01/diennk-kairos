import http_request from "services/httpRequest";
export const fetchUsers = async (url) => {
  return http_request.get(url, { showSpinner: true });
};

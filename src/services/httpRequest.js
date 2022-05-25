import { axios_instance } from "./initRequest";

class HttpRequest {
  constructor() {
    this.api = axios_instance;
  }
  async get(url, config) {
    return this.api.get(url, config);
  }
  async post(url, bodyData, config) {
    return this.api.post(url, bodyData, config);
  }
}
const http_request = new HttpRequest();
export default http_request;

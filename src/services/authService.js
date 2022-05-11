class AuthService {
  setAccessToken = (val) => window.localStorage.setItem("accessToken", val);
  getAccessToken = () => window.localStorage.getItem("accessToken");
  clearStorage = () => window.localStorage.clear();
  isAuthenticated = () => !!this.getAccessToken();
  isValidToken = (accessToken) => {
    let checked = true;
    if (!accessToken) {
      checked = false;
    }
    const expiryV1 = 47175845743;
    const expiryV2 = Date.now();
    const remainedMilisecond = expiryV2 - expiryV1;
    if (remainedMilisecond > 1 * 1440 * 1000) {
      checked = false;
    }
    return checked;
  };
}
const authService = new AuthService();
export default authService;

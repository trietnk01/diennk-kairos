import { createContext, React, useState } from "react";
const AuthContext = createContext();
function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
}
export { AuthContext, AuthProvider };

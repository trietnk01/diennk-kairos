import { PATH_NAME } from "configs";
import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import authService from "services/authService";

function AuthGuard({ children }) {
  const isLogin = authService.isAuthenticated();
  console.log("AuthGuard = ", isLogin);
  if (!isLogin) return <Navigate to={`/${PATH_NAME.ADMIN_LOGIN}`} />;
  return <Fragment>{children}</Fragment>;
}

export default AuthGuard;

import { PATH_NAME } from "configs";
import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import auth_service from "services/authService";

function AuthGuard({ children }) {
  const isLogin = auth_service.isAuthenticated();
  if (!isLogin) return <Navigate to={`/${PATH_NAME.ADMIN_LOGIN}`} />;
  return <Fragment>{children}</Fragment>;
}

export default AuthGuard;

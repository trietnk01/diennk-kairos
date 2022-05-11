import { PATH_NAME } from "configs";
import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import authService from "services/authService";

function GuestGuard({ children }) {
  const isLogin = authService.isAuthenticated();
  console.log("GuestGuard = ", isLogin);
  if (isLogin) return <Navigate to={`/${PATH_NAME.ADMIN_MASTER}/${PATH_NAME.ADMIN_USER_INFO}`} />;
  return <Fragment>{children}</Fragment>;
}

export default GuestGuard;

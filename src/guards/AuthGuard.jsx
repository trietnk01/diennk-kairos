import { PATH_NAME } from "configs";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import authService from "services/authService";

function AuthGuard({ children }) {
  /* const isLogin = useSelector((state) => state.userReducer.isLogin); */
  const isLogin = authService.isAuthenticated();
  if (!isLogin) return <Navigate to={`/${PATH_NAME.ADMIN_LOGIN}`} />;
  return <Fragment>{children}</Fragment>;
}

export default AuthGuard;

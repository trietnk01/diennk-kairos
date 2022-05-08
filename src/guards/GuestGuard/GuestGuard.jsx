import { PATH_NAME } from "configs";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function GuestGuard({ children }) {
  const isLogin = useSelector((state) => state.userReducer.isLogin);
  if (isLogin) return <Navigate to={`/${PATH_NAME.ADMIN_MASTER}/${PATH_NAME.ADMIN_USER_INFO}`} />;
  return <Fragment>{children}</Fragment>;
}

export default GuestGuard;

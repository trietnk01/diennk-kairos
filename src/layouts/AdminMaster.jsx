import { authenticated } from "apis/user.api";
import "assets/admin/admin-main.scss";
import { PATH_NAME } from "configs";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet, useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import authService from "services/authService";
import userSlice from "slices/userSlice";
function CustomLink({ to, children, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  let classN = "text-white no-underline font-semibold block w-full border-l-2 border-solid border-transparent relative";
  if (match) {
    classN += " active";
  }
  return (
    <Link to={to} {...props} className={classN}>
      {children}
    </Link>
  );
}
function AdminMaster() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const accessToken = authService.getAccessToken();
    if (!accessToken) return;
    async function checkedAuthUser() {
      try {
        const res = await authenticated("/auth", accessToken);
        console.log("res = ", res);
        const data = res.data.user;
        if (!data.user) {
          navigate(`/${PATH_NAME.ADMIN_LOGIN}`);
          authService.clearStorage();
          return;
        }
      } catch (err) {
        console.log("err = ", err);
        if (!err.data.isSuccess) {
          navigate(`/${PATH_NAME.ADMIN_LOGIN}`);
          authService.clearStorage();
        }
      }
    }
    checkedAuthUser();
  }, []);

  function handleLogout(event) {
    event.preventDefault();

    dispatch(userSlice.actions.logout());
    navigate(`/${PATH_NAME.ADMIN_LOGIN}`);
  }
  console.log("AdminMaster return");
  return (
    <div className="text-base text-black">
      <nav className="fixed w-64 h-full left-0 bg-current">
        <div className="text-white text-4xl font-semibold py-3 text-center tracking-widest">Side menu</div>
        <ul className="w-full list-none">
          <li>
            <CustomLink to={`/${PATH_NAME.ADMIN_MASTER}/${PATH_NAME.ADMIN_USER_INFO}`}>User info</CustomLink>
          </li>
          <li>
            <a href="#" onClick={handleLogout} className="text-white no-underline font-semibold block w-full border-l-2 border-solid border-transparent relative">
              Logout
            </a>
          </li>
        </ul>
      </nav>
      <div className="ml-64 p-1">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminMaster;

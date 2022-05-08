import "assets/tailwind.css";
import LoadingSpinner from "components/LoadingSpinner";
import Notify from "components/Notify";
import { END_POINT } from "configs";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import RoutesMain from "RoutesMain";
import userSlice from "slices/userSlice";
function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    let userJson = localStorage.getItem(END_POINT.USER_LOGIN);
    let userInfo = null;
    if (userJson) {
      userInfo = JSON.parse(userJson);
      if (userInfo) {
        let expiryV1 = userInfo.expiry;
        let expiryV2 = Date.now();
        let remainedMilisecond = expiryV2 - expiryV1;
        if (remainedMilisecond > 1 * 1440 * 1000) {
          dispatch(userSlice.actions.logout());
        } else {
          dispatch(userSlice.actions.login({ ...userInfo, expiry: Date.now() }));
        }
      }
    }
  }, []);
  return (
    <Fragment>
      <RoutesMain></RoutesMain>
      <Notify />
      <LoadingSpinner />
    </Fragment>
  );
}

export default App;

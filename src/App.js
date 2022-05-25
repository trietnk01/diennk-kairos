import "assets/tailwind.css";
import LoadingSpinner from "components/LoadingSpinner";
import Notify from "components/Notify";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import RoutesMain from "RoutesMain";

function App() {
  const dispatch = useDispatch();
  return (
    <Fragment>
      <RoutesMain></RoutesMain>
      <Notify />
      <LoadingSpinner />
    </Fragment>
  );
}

export default App;

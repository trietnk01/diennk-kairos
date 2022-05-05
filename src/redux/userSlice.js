import { createSlice } from "@reduxjs/toolkit";
import { USER_LOGIN } from "configs";

export default createSlice({
  name: "user-slice",
  initialState: {
    isLogin: false,
    userInfo: null,
  },
  reducers: {
    login: (state, { payload }) => {
      console.log("payload = ", payload);
      state.isLogin = true;
      state.userInfo = payload;
      localStorage.setItem(USER_LOGIN, JSON.stringify(payload));
    },
    logout: (state) => {
      state.isLogin = false;
      state.userInfo = null;
      localStorage.clear();
    },
  },
});

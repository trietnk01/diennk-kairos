import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "user-slice",
  initialState: {
    isLogin: false,
    userInfo: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.isLogin = true;
      state.userInfo = payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.userInfo = null;
    },
  },
});

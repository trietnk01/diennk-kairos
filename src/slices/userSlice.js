import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "user-slice",
  initialState: {
    exp: 0,
    iat: 0,
    itemUser: null,
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.exp = payload.exp;
      state.iat = payload.iat;
      state.itemUser = payload.user;
    },
  },
});

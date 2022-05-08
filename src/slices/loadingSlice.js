import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "loading-slice",
  initialState: {
    isShow: false,
  },
  reducers: {
    showLoading: (state) => {
      state.isShow = true;
    },
    hideLoading: (state) => {
      state.isShow = false;
    },
  },
});

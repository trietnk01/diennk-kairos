import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "loading-slice",
  initialState: {
    isShow: false,
  },
  reducers: {
    showSpinner: (state) => {
      state.isShow = true;
    },
    hideSpinner: (state) => {
      state.isShow = false;
    },
  },
});

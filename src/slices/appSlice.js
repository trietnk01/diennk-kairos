import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "app-slice",
  initialState: {
    showLoading: false,
    user: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.showLoading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload || null;
    },
  },
});

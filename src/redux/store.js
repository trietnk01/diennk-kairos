import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "slices/loadingSlice";
import notifySlice from "slices/notifySlice";
import userSlice from "slices/userSlice";
const store = configureStore({
  reducer: {
    userReducer: userSlice.reducer,
    loadingReducer: loadingSlice.reducer,
    notifyReducer: notifySlice.reducer,
  },
});
export const RootState = store.getState;
export default store;

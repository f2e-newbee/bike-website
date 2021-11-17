// store
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice";

export default configureStore({
  reducer: {
    // TODO: 測試用待移除
    counter: counterReducer,
  },
});

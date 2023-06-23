import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/Counterslice.js";
import todoReducer from "../features/Todo/TodoSlice.js";
import userReducer from "../features/User/UserSlice.js";

const Store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default Store;

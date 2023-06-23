import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/Counterslice.js";
import todoReducer from "../features/Todo/TodoSlice.js";

const Store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
});

export default Store;

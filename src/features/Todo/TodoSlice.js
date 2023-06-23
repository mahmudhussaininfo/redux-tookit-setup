import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    msg: "",
  },
  reducers: {
    addNewTodo: (state, { type, payload }) => {
      // state.todos = [...state.todos, payload];
      state.todos.push(payload);
    },
    delateTodo: (state, { type, payload }) => {
      state.todos = state.todos.filter((data) => data !== payload);
    },
  },
});

export const { addNewTodo, delateTodo } = todoSlice.actions;

export default todoSlice.reducer;

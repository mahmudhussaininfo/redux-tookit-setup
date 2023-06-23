import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 100,
    msg: "",
    err: null,
  },
  reducers: {
    Inc: (state, { type, payload }) => {
      state.count = state.count + 1;
      state.msg = "Yes";
    },
    Dec: (state, { type, payload }) => {
      state.count = state.count - 1;
    },
    Res: (state, { type, payload }) => {
      state.count = 0;
      state.msg = "done";
    },
    Ost: (state, { type, payload }) => {
      state.count = payload;
    },
  },
});

//action export
export const { Inc, Dec, Res, Ost } = CounterSlice.actions;

//export
export default CounterSlice.reducer;

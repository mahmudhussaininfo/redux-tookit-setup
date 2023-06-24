import { createSlice } from "@reduxjs/toolkit";
import { createUser, delateUser, fetchAllUsers } from "./UserApi";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    msg: "",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state, { type, payload }) => {
        state.loading = true;
      })
      .addCase(fetchAllUsers.fulfilled, (state, { type, payload }) => {
        state.loading = false;
        state.users = payload;
        state.msg = "doneeeeeeeeeeee";
      })
      .addCase(fetchAllUsers.rejected, (state, { type, payload }) => {
        state.loading = false;
        state.msg = "bokwas";
      })
      .addCase(delateUser.fulfilled, (state, { type, payload }) => {
        state.users = state.users.filter((data) => data._id !== payload);
      })
      .addCase(createUser.fulfilled, (state, { type, payload }) => {
        state.users.push(payload.user);
      });
  },
});

//export userSelectors
export const getUserData = (state) => state.user;

//export
export const {} = userSlice.actions;

//mendotary export
export default userSlice.reducer;

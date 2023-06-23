import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//get user
export const fetchAllUsers = createAsyncThunk(
  "user/fetchAllUsers",
  async () => {
    const response = await axios.get("http://localhost:5050/api/v1/mamu");
    return response.data;
  }
);

//delate user
export const delateUser = createAsyncThunk("user/delateUser", async (id) => {
  await axios.delete(`http://localhost:5050/api/v1/mamu/${id}`);
  return id;
});

import { createAsyncThunk } from "@reduxjs/toolkit";

const getUser = async (data: any) => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve({
        id: Math.floor(Math.random() * 1000),
        name: data.name,
        email: data.email,
      });
    }, 2000);
  });
};

export const getMe = createAsyncThunk(
  "user/me",
  async (data: { name: string; email: string }, { rejectWithValue }) => {
    try {
      const response = await getUser(data);
      return response;
    } catch (error) {
      const message = "Something Went Wrong";
      return rejectWithValue(message);
    }
  }
);

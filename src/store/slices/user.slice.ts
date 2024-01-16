import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMe } from "../actions/user.action";

interface UserType {
  id: string;
  name: string;
  email: string;
}
interface UserState {
  data: UserType | null;
  isLoading: boolean;
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      data: null,
      isLoading: false,
    } as UserState,
  },
  reducers: {
    logout: (state) => {
      state.user.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMe.pending, (state, action) => {
      state.user.isLoading = true;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.user.isLoading = false;
      state.user.data = action.payload as UserType;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.user.isLoading = false;
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

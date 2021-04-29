import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "login/login",
  async (userId, { rejectWithValue }) => {
    try {
      return userId;
    } catch (err) {
      return rejectWithValue(err.reponse.data);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    name: null,
    isLogin: false,
    userId: null,
  },
  reducers: {
    logOut: (state) => {
      state.name = null;
      state.userId = null;
      state.isLogin = false;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.name = null;
      state.userId = null;
      state.isLogin = false;
    },
    [login.fulfilled]: (state, action) => {
      state.name = action.payload;
      state.userId = 1;
      state.isLogin = true;
    },
    [login.rejected]: (state, action) => {
      state.name = null;
      state.userId = null;
      state.isLogin = true;
    },
  },
});

export const { logOut } = loginSlice.actions;

export default loginSlice.reducer;

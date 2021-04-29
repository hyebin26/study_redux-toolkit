import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostsAPI } from "../../api/posts";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (user, { rejectWithValue }) => {
    try {
      const data = await getPostsAPI();
      return data;
    } catch (err) {
      return rejectWithValue(err.reponse.data);
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: null,
    loading: true,
  },
  reducers: {},
  extraReducers: {
    [getPosts.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    [getPosts.pending]: (state, action) => {
      state.data = null;
      state.loading = true;
    },
    [getPosts.rejected]: (state, action) => {
      state.data = null;
      state.loading = true;
    },
  },
});

export default postsSlice.reducer;

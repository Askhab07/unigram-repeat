import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { postAdd, postDelete, postGet, postUpdate } from './postAction';
import { IPostStoreState } from '../../types/IPostStoreState';

const initialState: IPostStoreState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postGet.fulfilled, (state, action) => {
        state.posts = action.payload;
      })

      .addCase(postAdd.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })

      .addCase(postDelete.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postDelete.fulfilled, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.posts = state.posts.filter((post) => post._id !== action.payload);
      })
      .addCase(postDelete.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      .addCase(postUpdate.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postUpdate.fulfilled, (state, action) => {
        const updatedPost = action.payload;
        state.posts = state.posts.map((post) => post._id === updatedPost._id ? updatedPost : post);
      })
      .addCase(postUpdate.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
  },
});

export default postSlice.reducer;

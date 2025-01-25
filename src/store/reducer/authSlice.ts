import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserStoreState } from '../../types/IUserStoreState';
import { authUser, validationToken } from './authAction';
import { IUser } from '../../types/IUser';

const initialState: IUserStoreState = {
  user: {
    _id: '',
    avatar: '',
    username: '',
  },
  token: '',
  isAuth: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(authUser.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(authUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(validationToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(validationToken.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(validationToken.rejected, (state) => {
        state.isLoading = false;
        state.isAuth = false;
      });
  },
});

export default authSlice.reducer;

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
  isAuth: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(authUser.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
        state.isAuth = true;
      }
    )
    .addCase(validationToken.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.user = action.payload
        state.isAuth = true
      }
    )
  },
});

export default authSlice.reducer;

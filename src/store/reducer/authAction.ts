import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser } from '../../types/IUser';
import { baseService } from '../../api/url';
import Cookies from 'js-cookie';

interface IUserAuth extends IUser { token: string}

export const authUser = createAsyncThunk(
    'user/authUser',
    async (user: {username: string, password: string}) => {
      const response = await baseService.post<IUserAuth>('/user/sign-in', user);
      Cookies.set('token', response.data.token)
      return response.data;
    }
);

export const validationToken = createAsyncThunk(
  "user/validationToken",
  async (_, thunkAPI) => {
      const res = await baseService.get<IUser>("/user")
      return res.data
});
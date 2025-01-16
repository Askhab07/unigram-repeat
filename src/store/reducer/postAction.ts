import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseService } from '../../api/url';

export const postGet = createAsyncThunk(
    'post/postGet',
    async () => {
      const response = await baseService.get('/posts');
      return response.data;
    }
);

export const postAdd = createAsyncThunk(
  'post/postAdd',
  async () => {
    const response = await baseService.post('/posts');
    return response.data;
  }
);
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseService } from '../../api/url';
import Cookies from 'js-cookie';

export const postGet = createAsyncThunk('post/postGet', async () => {
  const response = await baseService.get('/posts');
  return response.data;
});

export const postAdd = createAsyncThunk(
  'posts/postAdd',
  async (newPostData: FormData) => {
    const response = await baseService.post('/posts', newPostData);
    return response.data;
  }
);

export const postDelete = createAsyncThunk(
  'posts/postDelete',
  async (postId: string, thunkAPI) => {
    try {
      await baseService.delete(`/posts/${postId}`);
      return postId;
    } catch (error) {
      console.error('Error deleting post:', error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postUpdate = createAsyncThunk(
  'posts/postUpdate',
  async (
    { postId, description }: { postId: string; description: string },
    { rejectWithValue }
  ) => {
    try {

      const token = Cookies.get('token');

      if (!token) {
        throw new Error('Authorization token is missing');
      }

      const response = await baseService.patch(
        `/posts/${postId}`,
        { description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      console.error('Error updating post:', error);

      return rejectWithValue(
        error.response?.data || 'Failed to update post'
      );
    }
  }
);
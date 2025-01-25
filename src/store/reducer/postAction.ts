import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseService } from '../../api/url';
import Cookies from 'js-cookie';

interface ApiError {
  response?: {
    data: any;
  };
  message: string;
}

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

      return rejectWithValue(error.response?.data || 'Failed to update post');
    }
  }
);

export const postLikeAdd = createAsyncThunk(
  'posts/postLikeAdd',
  async (postId: string) => {
    try {
      const token = Cookies.get('token');

      if (!token) {
        throw new Error('Authorization token is missing');
      }

      const response = await baseService.post(
        `/posts/${postId}/like`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error like add:', error);
      }
    }
  }
);

export const postLikeRemove = createAsyncThunk(
  'posts/postLikeRemove',
  async (postId: string) => {
    console.log('Post ID:', postId);
    
    try {
      const token = Cookies.get('token');

      if (!token) {
        throw new Error('Authorization token is missing');
      }

      const response = await baseService.post(
        `/posts/${postId}/unlike`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error like remove:', error);
      }
    }
  }
);

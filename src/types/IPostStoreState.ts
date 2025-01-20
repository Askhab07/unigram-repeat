import { IPost } from './IPost';

export interface IPostStoreState {
  posts: IPost[];
  isLoading: boolean;
  error: null | string
}

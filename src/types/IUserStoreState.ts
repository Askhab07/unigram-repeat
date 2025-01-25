import { IUser } from './IUser';

export interface IUserStoreState {
  user: IUser;
  token: string
  isAuth: boolean
  isLoading: boolean
}
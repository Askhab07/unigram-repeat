import { IUser } from './IUser';

export interface IPost {
    _id: string;
    description: string;
    comments: string[];
    image: string;
    user: Omit<IUser, "token">;
    created_at: string;
    likes: number;
}
import { Dispatch, SetStateAction } from 'react';

export interface ModalAddPostProps {
  setModalActive: Dispatch<SetStateAction<boolean>>;
  editingPost: any;
  stepModal: number;
  setStepModal: Dispatch<SetStateAction<number>>;
  setEditingPost: Dispatch<SetStateAction<any>>;
}

export interface ModalAddPostSecondProps {
  setModalActive: (active: boolean) => void;
  setStepModal: (step: number) => void;
  image: File | string | null;
  setImage: (image: File | string | null) => void;
  description: string;
  setDescription: (description: string) => void;
  postId?: string;
  editingPost?: {
    _id: string;
    image?: string;
    description?: string;
  };
  setEditingPost: (
    post: {
      _id: string;
      image?: string;
      description?: string;
    } | null
  ) => void;
}
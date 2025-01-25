import React, { useEffect } from 'react';
import back from '../../assets/icons/arrowback.svg';
import emojis from '../../assets/icons/emojisgray.svg';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { postAdd, postUpdate } from '../../store/reducer/postAction';
import Cookies from 'js-cookie';
import { ModalAddPostSecondProps } from './modal';

const ModalAddPostSecond: React.FC<ModalAddPostSecondProps> = ({
  setModalActive,
  setStepModal,
  image,
  setImage,
  description,
  setDescription,
  postId,
  editingPost,
  setEditingPost,
}) => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (editingPost) {
      setImage(editingPost.image || null);
      setDescription(editingPost.description || '');
    }
  }, [editingPost, setImage, setDescription]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    if (image && typeof image !== 'string') {
      formData.append('image', image);
    }
    formData.append('description', description);
    formData.append('user', Cookies.get('token') || '');
    formData.append('created_at', new Date().toISOString());

    if (postId) {
      dispatch(postUpdate({ postId, description }));
    } else {
      dispatch(postAdd(formData));
    }

    setDescription('');
    setImage(null);
    setModalActive(false);
    setEditingPost(null);
  };

  return (
    <div className="fixed z-50 top-10 left-[17.5%]  w-[956px] h-[677px] bg-white shadow-2xl rounded-3xl">
      <div className="h-[70px] flex items-center justify-between px-6 border-b-[1px] border-[#DBDBDB]">
        <button
          className="font-semibold text-lg text-[#0095F6]"
          onClick={() => setStepModal(1)}
        >
          <img src={back} alt="Back" />
        </button>
        <h2 className="flex-1 flex justify-center ml-20 font-bold text-xl">
          Создание публикации
        </h2>
        <button
          className="font-semibold text-lg text-[#0095F6]"
          onClick={handleSubmit}
        >
          Поделиться
        </button>
      </div>
      <div className="h-[604px] flex gap-4">
        <img
          className="w-[599px] h-[607px] rounded-bl-3xl"
          src={
            image
              ? typeof image === 'string'
                ? image
                : URL.createObjectURL(image)
              : ''
          }
          alt={typeof image === 'string' ? 'Uploaded image' : image?.name || ''}
        />
        <div className="w-[317px] flex flex-col gap-[18px] mt-2.5 mr-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#c4c4c4]" />
            <h2 className="font-medium text-sm">{user.user.username}</h2>
          </div>
          <textarea
            className="outline-none h-36 resize-none text-sm font-light placeholder:text-black"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Добавьте подпись..."
            maxLength={2200}
          />
          <div className="flex justify-between items-center">
            <img src={emojis} alt="Emojis" />
            <h2 className="text-[#999999] text-sm font-medium">
              {description.length}/2,200
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddPostSecond;

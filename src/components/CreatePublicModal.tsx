import React, { useRef, useState } from 'react';
import back from '../assets/icons/arrowback.svg';
import emojis from '../assets/icons/emojisgray.svg';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { postAdd } from '../store/reducer/postAction';
import Cookies from 'js-cookie';
import { useAppSelector } from '../hooks/useAppSelector';

const CreatePublicModal = ({handleCreate}: any) => {
  const user = useAppSelector(state => state.user)
  const [step, setStep] = useState(1);
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch()

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const formData = new FormData();
    if (image) formData.append('image', image);
    formData.append('description', description);
    formData.append('user', Cookies.get('token') || '');
    formData.append('created_at', new Date().toISOString());

    dispatch(postAdd(formData))
    setDescription('');
    setImage(null);
    handleCreate()
  }

  return (
    <>
      {step === 1 && (
        <div className="fixed z-50 top-[10%] left-[30%] w-[650px] h-[677px] bg-white rounded-3xl shadow-2xl">
          <div className="h-[70px] flex items-center justify-between pr-8 border-b-[1px] border-[#DBDBDB]">
            <h2 className="flex-1 flex justify-center ml-20 font-bold text-xl">
              Создание публикации
            </h2>
            <button
              className="font-semibold text-lg text-[#0095F6] disabled:opacity-50"
              onClick={() => setStep(2)} disabled={!image}
            >
              Далее
            </button>
          </div>
          <div className="h-3/4 flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold">Перетащите сюда фото и видео</h2>
            <button
              onClick={handleButtonClick}
              className="w-[272px] h-[38px] bg-[#79A7FF] rounded-3xl border-[1px] border-[#6A6A6A] font-bold text-lg text-white"
            >
              Выбрать на компьютере
            </button>
            <input
              className="hidden"
              type="file"
              accept="image/*,video/*"
              ref={fileInputRef}
              onChange={(event) => {
                const files = event.target.files;
                if (files && files.length > 0) {
                  setImage(files[0]);
                }
              }}
            />
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="fixed z-50 top-[10%] left-[17.5%]  w-[956px] h-[677px] bg-white shadow-2xl rounded-3xl">
          <div className="h-[70px] flex items-center justify-between px-6 border-b-[1px] border-[#DBDBDB]">
            <button
              className="font-semibold text-lg text-[#0095F6]"
              onClick={() => setStep(1)}
            >
              <img src={back} alt="" />
            </button>
            <h2 className="flex-1 flex justify-center ml-20 font-bold text-xl">
              Создание публикации
            </h2>
            <button className="font-semibold text-lg text-[#0095F6]" onClick={handleSubmit}>
              Поделиться
            </button>
          </div>
          <div className="h-[604px] flex gap-4">
            <img className="w-[599px] h-[607px] rounded-bl-3xl" src={image ? URL.createObjectURL(image) : ''} alt={image?.name} />
            <div className="w-[317px] flex flex-col gap-[18px] mt-2.5 mr-6">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-full bg-[#c4c4c4]"
                />
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
                <img className="" src={emojis} alt="" />
                <h2 className="text-[#999999] text-sm font-medium">
                  {description.length}/2,200
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePublicModal;

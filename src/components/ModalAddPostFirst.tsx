import React, { useRef } from 'react';

interface ModalAddPostFirstProps {
  setStepModal: (step: number) => void;
  image: File | null | string;
  setImage: (image: File | null) => void;
}

const ModalAddPostFirst: React.FC<ModalAddPostFirstProps> = ({ setStepModal, image, setImage }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="absolute z-50 top-10 overflow left-[30%] w-[650px] h-[677px] bg-white rounded-3xl shadow-2xl">
      <div className="h-[70px] flex items-center justify-between pr-8 border-b-[1px] border-[#DBDBDB]">
        <h2 className="flex-1 flex justify-center ml-20 font-bold text-xl">
          Создание публикации
        </h2>
        <button
          className="font-semibold text-lg text-[#0095F6] disabled:opacity-50"
          onClick={() => setStepModal(2)}
          disabled={!image}
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
  );
};

export default ModalAddPostFirst;

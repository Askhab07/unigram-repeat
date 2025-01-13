import React, { useRef } from 'react';

const CreatePublicModal = () => {

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };


  return (
    <div className="absolute z-50 top-[10%] right-1/4 w-[650px] h-[677px] bg-white rounded-3xl shadow-2xl">
      <div className="h-[70px] flex items-center justify-between pr-8 border-b-[1px] border-[#DBDBDB]">
        <h2 className="flex-1 flex justify-center ml-20 font-bold text-xl">
          Создание публикации
        </h2>
        <button className="font-semibold text-lg text-[#0095F6]">Далее</button>
      </div>
      <div className='h-3/4 flex flex-col items-center justify-center gap-4'>
        <h2 className="text-2xl font-bold">Перетащите сюда фото и видео</h2>
        <button onClick={handleButtonClick} className='w-[272px] h-[38px] bg-[#79A7FF] rounded-3xl border-[1px] border-[#6A6A6A] font-bold text-lg text-white'>Выбрать на компьютере</button>
         <input className='hidden' type="file" id="fileInput" multiple accept="image/*,video/*" ref={fileInputRef} />
      </div>
    </div>
  );
};

export default CreatePublicModal;

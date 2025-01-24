import React from 'react';
import emojis from '../assets/icons/emojisgray.svg';

const ModalUpdatePost = ({newDescription, setNewDescription, isEditing, posts, handleUpdatePost }: any) => {
  return (
    <>
      {isEditing && (
        <div className="fixed z-50 top-[10%] left-[17.5%]  w-[956px] h-[677px] bg-white shadow-2xl rounded-3xl">
          <div className="h-[70px] flex items-center justify-between px-6 border-b-[1px] border-[#DBDBDB]">
            
            <h2 className="flex-1 flex justify-center ml-20 font-bold text-xl">
              Изменение публикации
            </h2>
            <button
              className="font-semibold text-lg text-[#0095F6]"
              onClick={handleUpdatePost}
            >
              Поделиться
            </button>
          </div>
          <div className="h-[604px] flex gap-4">
          <div className="w-[599px] h-[607px] rounded-bl-3xl bg-[#C4C4C4]" />
            <div className="w-[317px] flex flex-col gap-[18px] mt-2.5 mr-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#c4c4c4]" />
                <h2 className="font-medium text-sm">{posts[0].user.username}</h2>
              </div>
              <textarea
                className="outline-none h-36 resize-none text-sm font-light placeholder:text-black"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Добавьте подпись..."
                maxLength={2200}
              />
              <div className="flex justify-between items-center">
                <img className="" src={emojis} alt="" />
                <h2 className="text-[#999999] text-sm font-medium">
                  {newDescription.length}/2,200
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalUpdatePost;

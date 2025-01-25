import React, { useState } from 'react';
import optionsIcon from '../../assets/icons/options.svg';

const Header = ({
  post,
  currentUser,
  handleDeletePost,
  setModalActive,
  setEditingPost,
  setStepModal,
}: any) => {
  const [optionsActive, setOptionsActive] = useState(false);

  const handleOptions = () => {
    setOptionsActive(!optionsActive);
  };

  const editingPost = () => {
    setModalActive(true);
    setStepModal(2);
    setEditingPost(post);
  };

  return (
    <div className="w-full h-[60px] px-5 flex justify-between items-center bg-white rounded-t-[3px]">
      <div className="flex items-center gap-[14px]">
        <div className="w-8 h-8 bg-[#C4C4C4] rounded-full">
          <img src={post.user.avatar} alt="" />
        </div>
        <h2 className="font-medium text-sm">{post.user.username}</h2>
      </div>
      {post.user.username === currentUser.username ? (
        <div className="relative" onClick={handleOptions}>
          <img src={optionsIcon} alt="" />
          {optionsActive && (
            <div className="absolute -right-5">
              <button
                className="w-[116px] h-[26px] bg-[#2B3138] rounded-full text-white font-bold text-[11px] mb-1"
                onClick={editingPost}
              >
                Edit
              </button>
              <button
                className="w-[116px] h-[26px] bg-[#2B3138] rounded-full text-white font-bold text-[11px]"
                onClick={() => handleDeletePost(post._id)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Header;

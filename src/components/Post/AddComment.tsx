import React from 'react';
import emojis from '../../assets/icons/emojis.svg';

const AddComment = () => {
  return (
    <div className="h-[60px] flex justify-between items-center px-5 bg-white border-t-[1px] border-[#EFEFEF]">
      <div className="flex gap-3">
        <img src={emojis} alt="" />
        <input
          className="bg-transparent text-sm outline-0"
          type="text"
          placeholder="Add a comment..."
        />
      </div>
      <button className="text-[#0095F6] opacity-25">Post</button>
    </div>
  );
};

export default AddComment;

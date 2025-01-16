import React, { useState } from 'react';
import options from '../assets/icons/options.svg';
import likes from '../assets/icons/likes.svg';
import comments from '../assets/icons/comments.svg';
import share from '../assets/icons/share.svg';
import save from '../assets/icons/save.svg';
import emojis from '../assets/icons/emojis.svg';

const Post = () => {
  const [optionsActive, setOptionsActive] = useState(false);

  const handleOptions = () => {
    setOptionsActive(!optionsActive);
  };

  return (
    <div className="w-[600px] h-[910px] border-[1px] border-[#EFEFEF] rounded-[3px] box-content">
      <div className="w-full h-[60px] px-5 flex justify-between items-center bg-white rounded-t-[3px]">
        <div className="flex items-center gap-[14px]">
          <div className="w-8 h-8 bg-[#C4C4C4] rounded-full">
            {/* <img src="" alt="" /> */}
          </div>
          <h2 className="font-medium text-sm">johndoe</h2>
        </div>
        <div className="relative" onClick={handleOptions}>
          <img src={options} alt="" />
          {optionsActive && (
            <div className="absolute -right-5">
              <button className="w-[116px] h-[26px] bg-[#2B3138] rounded-full text-white font-bold text-[11px] mb-1">
                Edit
              </button>
              <button className="w-[116px] h-[26px] bg-[#2B3138] rounded-full text-white font-bold text-[11px]">
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-[600px] bg-[#C4C4C4]"></div>
      <div className="px-5 pb-[23.5px] bg-white">
        <div className="flex justify-between py-[15px]">
          <div className="flex gap-5">
            <img src={likes} alt="" />
            <img src={comments} alt="" />
            <img src={share} alt="" />
          </div>
          <img src={save} alt="" />
        </div>
        <div>
          <h2 className="text-sm font-medium mb-1">9.999 likes</h2>
          <h2 className="text-sm mb-[5px]">
            <span className="font-medium">johndoe</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor <span className='text-[#8E8E8E]'>... more</span>
          </h2>
          <button className="mb-[6px] text-[#8E8E8E] text-sm">
            See 99 comments
          </button>
          <h3 className="text-[#8E8E8E] text-xs leading-[14px]">9 HOURS AGO</h3>
        </div>
      </div>
      <div className='h-[60px] flex justify-between items-center px-5 bg-white border-t-[1px] border-[#EFEFEF]'>
        <div className='flex gap-3'>
          <img src={emojis} alt="" />
          <input className='bg-transparent text-sm outline-0' type="text" placeholder="Add a comment..." />
        </div>
        <button className='text-[#0095F6] opacity-25'>Post</button>
      </div>
    </div>
  );
};

export default Post;

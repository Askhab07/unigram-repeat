import React from 'react';

const Aside = () => {
  return (
    <aside className="w-[300px] h-[518px] pt-[30px]">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-[#C4C4C4] rounded-full">
            <img src="" alt="" />
          </div>
          <div className="text-sm ">
            <h2 className="font-medium">johndoe</h2>
            <h2 className="text-[#8E8E8E]">John Doe</h2>
          </div>
        </div>
        <button className="text-xs font-medium text-[#0095F6]">Change</button>
      </div>
      <div className="flex justify-between mt-[19px] mb-5">
        <h2 className="text-sm text-[#8E8E8E]">Suggestions for you</h2>
        <button className="text-xs font-medium">See all</button>
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#C4C4C4] rounded-full">
            <img src="" alt="" />
          </div>
          <div className="text-sm ">
            <h2 className="font-medium">johndoe</h2>
            <h2 className="text-[#8E8E8E] text-xs">Suggestion for you</h2>
          </div>
        </div>
        <button className="text-xs font-medium text-[#0095F6]">Follow</button>
      </div>
      <div className="text-xs text-[#8E8E8E] mt-8">
        <p className="mb-[18px]">
          Information · Help · Prisoner · API · Job · Privacity · Conditions ·
          Locations · Trending accounts · Hashtags · Language
        </p>
        <h3>© 2022 INSTAGRAM FROM SIMMXS</h3>
      </div>
    </aside>
  );
};

export default Aside;

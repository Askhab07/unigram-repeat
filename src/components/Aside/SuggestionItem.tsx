import React from 'react';

const SuggestionItem = ({ user }: any) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#C4C4C4] rounded-full">
          {/* <img src={user.user.avatar} alt="" /> */}
        </div>
        <div className="text-sm ">
          <h2 className="font-medium">{user}</h2>
          <h2 className="text-[#8E8E8E] text-xs">Suggestion for you</h2>
        </div>
      </div>
      <button className="text-xs font-medium text-[#0095F6]">Follow</button>
    </div>
  );
};

export default SuggestionItem;

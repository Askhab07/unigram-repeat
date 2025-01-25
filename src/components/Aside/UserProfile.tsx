import React from 'react';

const UserProfile = ({ user }: any) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 bg-[#C4C4C4] rounded-full">
          {/* <img src="" alt="" /> */}
        </div>
        <div className="text-sm ">
          <h2 className="font-medium">{user.username}</h2>
          <h2 className="text-[#8E8E8E]">{user.username}</h2>
        </div>
      </div>
      <button className="text-xs font-medium text-[#0095F6]">Change</button>
    </div>
  );
};

export default UserProfile;

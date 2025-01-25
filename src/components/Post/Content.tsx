import React from 'react';

const Content = ({ post }: any) => {
  return (
    <div className="flex justify-center items-center w-full h-[600px] bg-[#C4C4C4]">
      {/* <img src={post.image} alt="" /> */}
      <h2 className="text-9xl font-black text-white opacity-50 rotate-45">
        {post.user.username}
      </h2>
    </div>
  );
};

export default Content;

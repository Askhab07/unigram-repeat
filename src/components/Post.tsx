import React, { useState } from 'react';
import options from '../assets/icons/options.svg';
import likes from '../assets/icons/likes.svg';
import comments from '../assets/icons/comments.svg';
import share from '../assets/icons/share.svg';
import save from '../assets/icons/save.svg';
import emojis from '../assets/icons/emojis.svg';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useAppSelector } from '../hooks/useAppSelector';

const Post = ({
  post,
  handleDeletePost,
  setModalActive,
  setEditingPost,
  setStepModal,
}: any) => {
  const [optionsActive, setOptionsActive] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const { user } = useAppSelector((state) => state.user);

  const editingPost = () => {
    setModalActive(true);
    setStepModal(2);
    setEditingPost(post);
  };

  const handleOptions = () => {
    setOptionsActive(!optionsActive);
  };

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  const createdTime = post.created_at
    ? formatDistanceToNow(new Date(Number(post.created_at)), {
        addSuffix: true,
        locale: ru,
      })
    : 'Некорректная дата';

  return (
    <div className="w-[600px] min-h-[890px] border-[1px] border-[#EFEFEF] rounded-[3px] box-content">
      <div className="w-full h-[60px] px-5 flex justify-between items-center bg-white rounded-t-[3px]">
        <div className="flex items-center gap-[14px]">
          <div className="w-8 h-8 bg-[#C4C4C4] rounded-full">
            <img src={post.user.avatar} alt="" />
          </div>
          <h2 className="font-medium text-sm">{post.user.username}</h2>
        </div>
        {user.username === post.user.username ? (
          <div className="relative" onClick={handleOptions}>
            <img src={options} alt="" />
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
      <div className="flex justify-center items-center w-full h-[600px] bg-[#C4C4C4]">
        {/* <img src={post.image} alt="" /> */}
        <h2 className="text-9xl font-black text-white opacity-50 rotate-45">
          {post.user.username}
        </h2>
      </div>
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
          <h2 className="text-sm font-medium mb-1">
            {post.likes.length} likes
          </h2>
          <h2 className="text-sm mb-[5px] break-words">
            <span className="font-medium">{post.user.username} </span>
            {post.description.slice(
              0,
              readMore ? post.description.length : 140
            )}{' '}
            <span
              className="text-[#8E8E8E] cursor-pointer"
              onClick={handleReadMore}
            >
              {!readMore && post.description.length >= 140
                ? '...развернуть'
                : post.description.length <= 140 && 140 >= 0
                ? ''
                : 'свернуть'}
            </span>
          </h2>
          <button className="mb-[6px] text-[#8E8E8E] text-sm">
            {post.comments.length === 0
              ? 'Пока нет комментариев'
              : `Прочитать ${post.comments.length} ${
                  post.comments.length === 1 ? 'комментарий' : 'комментария'
                }`}
          </button>
          <h3 className="text-[#8E8E8E] text-xs leading-[14px]">
            {createdTime}
          </h3>
        </div>
      </div>
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
    </div>
  );
};

export default Post;

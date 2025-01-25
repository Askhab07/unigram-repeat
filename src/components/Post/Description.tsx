import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale';

const Description = ({ post }: any) => {
  const [readMore, setReadMore] = useState(false);

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
    <div>
      <h2 className="text-sm font-medium mb-1">{post.likes.length} likes</h2>
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
      <h3 className="text-[#8E8E8E] text-xs leading-[14px]">{createdTime}</h3>
    </div>
  );
};

export default Description;

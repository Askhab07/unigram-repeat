import React from 'react';
import likesIcon from '../../assets/icons/likes.svg';
import likesRedIcon from '../../assets/icons/likesred.svg';
import commentsIcon from '../../assets/icons/comments.svg';
import shareIcon from '../../assets/icons/share.svg';
import saveIcon from '../../assets/icons/save.svg';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { postLikeAdd, postLikeRemove } from '../../store/reducer/postAction';

const Actions = ({ liked, setLiked, refreshPosts, post }: any) => {
  const dispatch = useAppDispatch();

  const handleLike = async () => {
    if (liked) {
      await dispatch(postLikeRemove(post._id)).unwrap();
    } else {
      await dispatch(postLikeAdd(post._id)).unwrap();
    }
    setLiked(!liked);
    refreshPosts();
  };

  return (
    <div className="flex justify-between py-[15px]">
      <div className="flex gap-5">
        <img
          src={liked ? likesRedIcon : likesIcon}
          alt=""
          onClick={handleLike}
        />
        <img src={commentsIcon} alt="" />
        <img src={shareIcon} alt="" />
      </div>
      <img src={saveIcon} alt="" />
    </div>
  );
};

export default Actions;

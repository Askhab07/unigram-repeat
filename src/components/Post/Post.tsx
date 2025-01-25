import React, { useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import Header from './Header';
import Content from './Content';
import Actions from './Actions';
import Description from './Description';
import AddComment from './AddComment';

const Post = ({
  post,
  handleDeletePost,
  setModalActive,
  setEditingPost,
  setStepModal,
  refreshPosts,
}: any) => {
  const { user } = useAppSelector((state) => state.user);
  const [liked, setLiked] = useState(post.likes.includes(user._id));

  return (
    <div className="w-[600px] min-h-[890px] border-[1px] border-[#EFEFEF] rounded-[3px] box-content">
      <Header
        handleDeletePost={handleDeletePost}
        currentUser={user}
        post={post}
        setModalActive={setModalActive}
        setEditingPost={setEditingPost}
        setStepModal={setStepModal}
      />
      <Content post={post} />
      <div className="px-5 pb-[23.5px] bg-white">
        <Actions
          post={post}
          liked={liked}
          setLiked={setLiked}
          refreshPosts={refreshPosts}
        />
        <Description post={post} />
      </div>
      <AddComment />
    </div>
  );
};

export default Post;

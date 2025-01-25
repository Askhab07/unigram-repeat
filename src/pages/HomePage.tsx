import React, { useEffect, useState } from 'react';
import Header from '../layout/Header';
import Post from '../components/Post';
import Aside from '../components/Aside';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { postDelete, postGet } from '../store/reducer/postAction';
import ModalAddPost from '../components/ModalAddPost';

const HomePage = () => {
  const { posts } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const [modalActive, setModalActive] = useState(false);
  const [stepModal, setStepModal] = useState(1);
  const [editingPost, setEditingPost] = useState();

  useEffect(() => {
    document.body.style.overflow = modalActive ? 'hidden' : 'scroll';
    return () => {
      document.body.style.overflow = 'scroll';
    };
  }, [modalActive]);

  useEffect(() => {
    dispatch(postGet());
  }, [dispatch]);

  const handleDeletePost = (postId: string) => {
    dispatch(postDelete(postId)).unwrap();
  };

  return (
    <div className="w-[1440px] h-full mx-auto pb-10 bg-[#F9F9F9]">
      <Header setModalActive={setModalActive} setStepModal={setStepModal} />
      <div className="relative pt-6 flex justify-center gap-[35px]">
        <div className="flex flex-col-reverse gap-5">
          {posts.map((post) => (
            <Post
              key={post._id}
              post={post}
              handleDeletePost={handleDeletePost}
              setModalActive={setModalActive}
              setEditingPost={setEditingPost}
              setStepModal={setStepModal}
            />
          ))}
          {modalActive && (
            <ModalAddPost
              setModalActive={setModalActive}
              editingPost={editingPost}
              stepModal={stepModal}
              setStepModal={setStepModal}
              setEditingPost={setEditingPost}
            />
          )}
        </div>
        <Aside />
      </div>
    </div>
  );
};

export default HomePage;

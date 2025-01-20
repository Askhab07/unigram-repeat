import React, { useEffect, useState } from 'react';
import Header from '../layout/Header';
import Post from '../components/Post';
import Aside from '../components/Aside';
import CreatePublicModal from '../components/CreatePublicModal';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { postGet, postDelete, postUpdate } from '../store/reducer/postAction';

const Home = () => {
  const [modalActive, setModalActive] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState<string>('');
  const { posts } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(postGet());
  }, []);

  const handleCreate = () => {
    setModalActive(!modalActive);
  };

  const handleDeletePost = (postId: string) => {
    dispatch(postDelete(postId));
  };

  const handleUpdatePost = async (postId: string) => {
    try {
      await dispatch(
        postUpdate({ postId, description: newDescription })
      ).unwrap();
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div className="w-[1440px] h-full mx-auto pb-10 bg-[#F9F9F9]">
      <Header onClick={handleCreate} />
      {modalActive && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={handleCreate}
        />
      )}
      <div className="relative pt-6 flex justify-center gap-[35px]">
        <div className="flex flex-col-reverse gap-5">
          {posts.map((post) => (
            <Post
              key={post._id}
              post={post}
              handleDeletePost={handleDeletePost}
              handleUpdatePost={handleUpdatePost}
              setIsEditing={setIsEditing}
            />
          ))}
          {modalActive && (
            <CreatePublicModal
              isEditing={isEditing}
              handleCreate={handleCreate}
              setNewDescription={setNewDescription}
            />
          )}
        </div>
        <Aside />
      </div>
    </div>
  );
};

export default Home;

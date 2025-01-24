import React, { useEffect, useState } from 'react';
import Header from '../layout/Header';
import Post from '../components/Post';
import Aside from '../components/Aside';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { postGet } from '../store/reducer/postAction';
import ModalAddPost from '../components/ModalAddPost';
// import UpdatePostModal from '../components/UpdatePostModal';

const HomePage = () => {
  const { posts } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const [modalActive, setModalActive] = useState(false);

  // const [isEditing, setIsEditing] = useState(false);

  // const [newDescription, setNewDescription] = useState('');

  useEffect(() => {
    dispatch(postGet());
  }, [dispatch]);

  // const handleDeletePost = (postId: string) => {
  //   dispatch(postDelete(postId));
  // };

  // const handleUpdatePost = async (postId: string) => {
  //   try {
  //     await dispatch(
  //       postUpdate({ postId, description: newDescription })
  //     ).unwrap();
  //   } catch (error) {
  //     console.error('Error updating post:', error);
  //   }
  // };

  return (
    <div className="w-[1440px] h-full mx-auto pb-10 bg-[#F9F9F9]">
      <Header setModalActive={setModalActive} />
      {/* {isEditing && (
      )} */}
      <div className="relative pt-6 flex justify-center gap-[35px]">
        <div className="flex flex-col-reverse gap-5">
          {posts.map((post) => (
            <Post
              key={post._id}
              post={post}
              // handleDeletePost={handleDeletePost}
              // handleUpdatePost={handleUpdatePost}
              // setIsEditing={setIsEditing}
            />
          ))}
          {modalActive && <ModalAddPost setModalActive={setModalActive}/>}
          {/* {isEditing && (
            <UpdatePostModal
              posts={posts}
              isEditing={isEditing}
              newDescription={newDescription}
              setNewDescription={setNewDescription}
              handleUpdatePost={handleUpdatePost}
            />
          )} */}
        </div>
        <Aside />
      </div>
    </div>
  );
};

export default HomePage;

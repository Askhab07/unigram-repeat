import React, { useState } from 'react';
import ModalAddPostSecond from './ModalAddPostSecond';
import ModalAddPostFirst from './ModalAddPostFirst';
import { ModalAddPostProps } from './modal';

const ModalAddPost: React.FC<ModalAddPostProps> = ({
  setModalActive,
  editingPost,
  stepModal,
  setStepModal,
  setEditingPost,
}) => {
  const [image, setImage] = useState<File | string | null>(null);
  const [description, setDescription] = useState('');

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={() => {
          setModalActive(false);
          setEditingPost(null);
        }}
      />
      {stepModal === 1 && (
        <ModalAddPostFirst
          setStepModal={setStepModal}
          image={image}
          setImage={setImage}
        />
      )}
      {stepModal === 2 && (
        <ModalAddPostSecond
          setModalActive={setModalActive}
          setStepModal={setStepModal}
          postId={editingPost?._id}
          editingPost={editingPost}
          setEditingPost={setEditingPost}
          image={image}
          setImage={setImage}
          description={description}
          setDescription={setDescription}
        />
      )}
    </>
  );
};

export default ModalAddPost;

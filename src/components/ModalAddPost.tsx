import React, { useState, Dispatch, SetStateAction } from 'react';
import ModalAddPostSecond from './ModalAddPostSecond';
import ModalAddPostFirst from './ModalAddPostFirst';

interface ModalAddPostProps {
  setModalActive: Dispatch<SetStateAction<boolean>>;
  editingPost: any;
  stepModal: number;
  setStepModal: Dispatch<SetStateAction<number>>;
  setEditingPost: Dispatch<SetStateAction<any>>;
}

const ModalAddPost: React.FC<ModalAddPostProps> = ({ setModalActive, editingPost, stepModal, setStepModal, setEditingPost }) => {
  const [image, setImage] = useState<File | string | null>(null);
  const [description, setDescription] = useState('');

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-50 z-40"
        onClick={() => setModalActive(false)}
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

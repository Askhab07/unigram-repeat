import React, { useState } from 'react';
import ModalAddPostSecond from './ModalAddPostSecond';
import ModalAddPostFirst from './ModalAddPostFirst';

const ModalAddPost = ({ setModalActive }: any) => {
  const [stepModal, setStepModal] = useState(1);
  const [image, setImage] = useState<File | null>(null);

  return (
    <div className="fixed z-50 top-[10%] left-[30%] w-[650px] h-[677px] bg-white rounded-3xl shadow-2xl">
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
          image={image}
          setImage={setImage}
        />
      )}
    </div>
  );
};

export default ModalAddPost;

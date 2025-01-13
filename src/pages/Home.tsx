import React, { useState } from 'react';
import Header from '../layout/Header';
import Post from '../components/Post';
import Aside from '../components/Aside';
import CreatePublicModal from '../components/CreatePublicModal';

const Home = () => {
  const [modalActive, setModalActive] = useState(false);

  const handleCreate = () => {
    setModalActive(!modalActive);
  };

  return (
    <div
      className={`w-[1440px] mx-auto bg-[#F9F9F9] ${
        modalActive ? '' : ''
      }`}
    >
      <Header onClick={handleCreate} />
      {modalActive && <div className='fixed inset-0 bg-black opacity-50 z-40' onClick={handleCreate}/>}
      <div className="relative pt-6 flex justify-center gap-[35px]">
        <div>
          <Post />
          {modalActive && <CreatePublicModal />}
        </div>
        <Aside />
      </div>
    </div>
  );
};

export default Home;

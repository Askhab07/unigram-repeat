import React from 'react';
import instagram from '../assets/icons/instagram.svg';
import search from '../assets/icons/search.svg';
import add from '../assets/icons/add.svg'
import home from '../assets/icons/home-active.svg'
import likes from '../assets/icons/likes.svg'
import msg from '../assets/icons/msg.svg'
import trends from '../assets/icons/trends.svg'

// interface IHeaderProps {
//   setModalActive
// }

const Header = ({setModalActive, setStepModal}: any) => {
  return (
    <header className="w-[1440px] h-[60px] flex items-center justify-center gap-[150px] bg-white">
      <img className="w-[103px]" src={instagram} alt="" />
      <div className="w-[252px] h-9 pl-5 flex items-center gap-3 bg-[#EFEFEF] rounded-lg">
        <img src={search} alt="" />
        <input
          className="bg-transparent outline-0"
          type="search"
          placeholder="Search"
          name=""
          id=""
        />
      </div>
      <nav className='flex gap-[25px]'>
        <div>
          <img src={home} alt="" />
        </div>
        <div>
          <img src={msg} alt="" />
        </div>
        <div onClick={() => {
          setModalActive(true)
          setStepModal(1)
        }}>
          <img src={add} alt="" />
        </div>
        <div>
          <img src={trends} alt="" />
        </div>
        <div>
          <img src={likes} alt="" />
        </div>
        <div className='w-6 h-6 rounded-full bg-[#C4C4C4]'>
            {/* <img src="" alt="" /> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;

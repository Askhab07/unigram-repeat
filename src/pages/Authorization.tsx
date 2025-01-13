import React from 'react';
import instagram from '../assets/icons/instagram.svg';

const Authorization = () => {
  return (
    <div className='w-[1440px] mx-auto flex flex-col items-center'>
      <div className='mt-[234px] mb-[55px]'>
        <img src={instagram} alt="" />
      </div>
      <input className="w-[720px] h-[133px] mb-8 bg-[#F5F5F5] border-[1px] border-[#6A6A6A] rounded-3xl text-[32px] px-[35px]" placeholder='Телефон, имя пользователя или эл.адрес' type="text" />
      <input className="w-[720px] h-[133px] mb-8 bg-[#F5F5F5] border-[1px] border-[#6A6A6A] rounded-3xl text-[32px] px-[35px]" placeholder='Пароль' type="text" />
      <button className='w-[720px] h-[100px] bg-[#79A7FF] border-[1px] border-[#6A6A6A] rounded-3xl font-bold text-[42px] text-white'>Войти</button>
    </div>
  );
};

export default Authorization;

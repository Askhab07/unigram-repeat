import React, { useState } from 'react';
import instagram from '../assets/icons/instagram.svg';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { authUser } from '../store/reducer/authAction';
import { useNavigate } from 'react-router-dom';

const Authorization = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(authUser({username, password}));
    setUsername('');
    setPassword('');
    navigate('/')
  };

  return (
    <div className="w-[1440px] mx-auto flex flex-col items-center">
      <div className="mt-[234px] mb-[55px]">
        <img src={instagram} alt="" />
      </div>
      <input
        className="w-[720px] h-[133px] mb-8 bg-[#F5F5F5] border-[1px] border-[#6A6A6A] rounded-3xl text-[32px] px-[35px]"
        placeholder="Телефон, имя пользователя или эл.адрес"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="w-[720px] h-[133px] mb-8 bg-[#F5F5F5] border-[1px] border-[#6A6A6A] rounded-3xl text-[32px] px-[35px]"
        placeholder="Пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="w-[720px] h-[100px] bg-[#79A7FF] border-[1px] border-[#6A6A6A] rounded-3xl font-bold text-[42px] text-white"
        onClick={handleClick}
      >
        Войти
      </button>
    </div>
  );
};

export default Authorization;

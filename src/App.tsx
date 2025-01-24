import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Authorization from './pages/Authorization';
import HomePage from './pages/HomePage';
import { useAppSelector } from './hooks/useAppSelector';
import { setTokenBaseService } from './api/url';
import { useAppDispatch } from './hooks/useAppDispatch';
import { validationToken } from './store/reducer/authAction';

function App() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.user);
  const { isLoading } = useAppSelector((state) => state.user);

  const handleAuth = async () => {
    try {
      setTokenBaseService();
      await dispatch(validationToken()).unwrap();
    } catch (error) {
      console.error('Authentication failed:', error);
      navigate('/sign-in');
    }
  };

  useEffect(() => {
    handleAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen min-h-screen flex justify-center items-center animate-pulse text-9xl">
        загрузка...
      </div>
    );
  }

  return (
    <Routes>
      {isAuth ? (
        <Route path="/" element={<HomePage />} />
      ) : (
        <Route path="/sign-in" element={<Authorization />} />
      )}
      <Route
        path="*"
        element={
          <div className="w-screen min-h-screen flex flex-col justify-center items-center gap-5">
            <h2 className="text-5xl font-bold">Страница не найдена</h2>
            <button
              className="text-xl font-bold border-red-500 border-4 p-4 rounded-xl hover:bg-red-500 hover:text-white transition-all ease-in-out"
              onClick={() => navigate('/')}
            >
              Назад на главную
            </button>
          </div>
        }
      />
    </Routes>
  );
}

export default App;

// авторизация - /user/sign-in, post, body: { username: string, password:string }

// получение пользователя - /user, get, headers: { "Authorization":  <token>}

// получение всех постов - /posts, get

// создание поста - /posts, post, body: { description: string, image: File},  headers: { "Authorization":  <token>}

// удаление поста - /posts/:id, delete, headers: { "Authorization":  <token>}

// изменение поста - /posts/:id, patch, { description: string }, headers: { "Authorization":  <token>}

// поставить лайк - /posts/:id/like, headers: { "Authorization":  <token>}

// убрать лайк - /posts/:id/unlike, headers: { "Authorization":  <token>}

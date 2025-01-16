import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Authorization from './pages/Authorization';
import Home from './pages/Home';
import { useAppSelector } from './hooks/useAppSelector';
import { setTokenBaseService } from './api/url';
import { useAppDispatch } from './hooks/useAppDispatch';
import { validationToken } from './store/reducer/authAction';

function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.user);

  const handleAuth = async () => {
    try {
      setTokenBaseService();
      await dispatch(validationToken()).unwrap();
      navigate('/');
    } catch (error) {
      console.error("Authentication failed:", error)
      navigate('sign-in');
    }
  };

  useEffect(() => {
    handleAuth();
  }, []);
  
  return (
    <div>
      <Routes>
        {isAuth ? (
          <Route path="/" element={<Home />} />
        ) : (
          <>
          <Route path="/sign-in" element={<Authorization />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;

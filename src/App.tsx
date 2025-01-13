import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Authorization from './pages/Authorization';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/sign-in',
    Component: Authorization
  },
  {
    path: '/',
    Component: Home
  },
])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

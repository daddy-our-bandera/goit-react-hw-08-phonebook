import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';

// const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<ContactsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export { App };

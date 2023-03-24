import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Container, HeaderBar } from './SharedLayout.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header>
        <Container>
          <HeaderBar>{isLoggedIn ? <UserMenu /> : <AuthNavigate />}</HeaderBar>
        </Container>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={3000} rtl position="top-center" />
    </>
  );
};

import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { AuthNavigate } from 'components/AuthNavigate/AuthNavigate';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header>
        <NavLink to="/">Home </NavLink>
        {isLoggedIn ? <UserMenu /> : <AuthNavigate />}
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

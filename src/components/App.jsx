import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';

import { selectIsRefetching } from 'redux/auth/selectors';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { refreshUser } from 'redux/auth/operations';
import PrivateRoute from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import NotFoundPage from 'pages/NotFoundPage';
import { PageLoader } from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const isRefetching = useSelector(selectIsRefetching);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefetching ? (
    <PageLoader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export { App };

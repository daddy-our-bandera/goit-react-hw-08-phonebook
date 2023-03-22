import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const { isLoggedIn, isRefreshing } = useAuth();
  const onRedirect = !isLoggedIn && !isRefreshing;
  return onRedirect ? <Navigate to={redirectTo} /> : Component;
}

import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefetching,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefetching = useSelector(selectIsRefetching);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefetching,
    user,
  };
};

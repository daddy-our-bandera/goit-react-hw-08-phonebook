import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const onClick = () => dispatch(logOut());

  return (
    <div>
      <p>welcome{user.name}</p>
      <button onClick={onClick}>logout</button>
    </div>
  );
};

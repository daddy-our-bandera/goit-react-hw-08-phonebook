import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { UserBox, User, Btn } from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const onClick = () => dispatch(logOut());

  return (
    <UserBox>
      <User>
        <p>Welcome {user.name}</p>
        <Btn onClick={onClick}>logout</Btn>
      </User>
    </UserBox>
  );
};

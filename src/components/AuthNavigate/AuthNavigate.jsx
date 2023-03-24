import { Link, SliderMenu } from './AuthNavigate.styled';

export const AuthNavigate = () => {
  return (
    <SliderMenu>
      <li>
        <Link to="/">Home </Link>
      </li>
      <li>
        <Link to="login">Login </Link>
      </li>
      <li>
        <Link to="register">Register </Link>
      </li>
    </SliderMenu>
  );
};

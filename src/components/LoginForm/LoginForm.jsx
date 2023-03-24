import {
  Btn,
  Form,
  FormBox,
  UserBox,
} from 'components/ContactForm/ContactForm.styled';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: 'onChange' });

  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(logIn({ email: data.email, password: data.password }));
  };

  return (
    <FormBox>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <UserBox>
          <input
            placeholder="Email:"
            {...register('email', {
              required: 'This field is required!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            })}
            type="email"
          />
          <label htmlFor="">
            {errors?.email && <p>{errors.email.message || 'Error!'}</p>}
          </label>
        </UserBox>
        {/* 9wHbbckVyZb */}
        <UserBox>
          <input
            placeholder="Password:"
            {...register('password', {
              required: 'This field is required!',
              pattern: {
                value: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                message: 'Invalid password address',
              },
            })}
            type="password"
          />
          <label htmlFor="">
            {errors?.password && <p>{errors.password.message || 'Error!'}</p>}
          </label>
        </UserBox>
        <Btn type="submit" disabled={!isValid}>
          log in
        </Btn>
      </Form>
    </FormBox>
  );
};

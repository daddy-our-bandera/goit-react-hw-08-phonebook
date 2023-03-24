import {
  Btn,
  Form,
  FormBox,
  UserBox,
} from 'components/ContactForm/ContactForm.styled';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/operations';

export const RegisterForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: 'onChange' });

  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(
      registration({
        name: data.username,
        email: data.email,
        password: data.password,
      })
    );
  };

  return (
    <FormBox>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <UserBox>
          <input
            placeholder="Username:"
            {...register('username', {
              required: 'this field is required!',
              minLength: {
                value: 3,
                message: 'length must be at least 3 characters!',
              },
            })}
            type="name"
          />
          <label htmlFor="">
            {errors?.username && <p>{errors?.username?.message || 'Error!'}</p>}
          </label>
        </UserBox>

        <UserBox>
          <input
            placeholder="Email:"
            {...register('email', {
              required: 'this field is required!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
            type="email"
          />
          <label htmlFor="">
            {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
          </label>
        </UserBox>

        <UserBox>
          <input
            placeholder="Passwor:"
            {...register('password', {
              required: 'this field is required!',
              pattern: {
                value: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                message: 'invalid password address',
              },
            })}
            type="password"
          />
          <label htmlFor="">
            {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
          </label>
        </UserBox>

        <Btn type="submit" disabled={!isValid}>
          register
        </Btn>
      </Form>
    </FormBox>
  );
};

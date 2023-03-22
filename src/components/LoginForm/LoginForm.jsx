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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">
          Email:
          <input
            {...register('email', {
              required: 'this field is required!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
            type="email"
          />
        </label>
        <div>{errors?.email && <p>{errors.email.message || 'Error!'}</p>}</div>
        <label htmlFor="">
          Password:
          <input
            {...register('password', {
              required: 'this field is required!',
              pattern: {
                value: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                message: 'invalid password address',
              },
            })}
            type="text"
          />
        </label>

        <input type="submit" disabled={!isValid} />
      </form>
    </>
  );
};

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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">
          Username:
          <input
            {...register('username', {
              required: 'this field is required!',
              minLength: {
                value: 3,
                message: 'length must be at least 3 characters!',
              },
            })}
            type="name"
          />
        </label>
        <div>
          {errors?.username && <p>{errors?.username?.message || 'Error!'}</p>}
        </div>
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
        <div>
          {errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}
        </div>
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
        <div>
          {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
        </div>
        <input type="submit" disabled={!isValid}></input>
      </form>
    </>
  );
};

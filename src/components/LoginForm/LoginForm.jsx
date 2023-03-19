import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(logIn({ email: data.email, password: data.password }));
  };

  // semenblessed@gmail.com
  // 9wHbbckVyZb
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">
          Email:
          <input
            {...register('email', {
              required: 'this field is required!',
              minLength: {
                value: 3,
                message: 'length must be at least 3 characters!',
              },
            })}
            type="text"
          />
        </label>
        <div>
          {errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}
        </div>
        <label htmlFor="">
          Password:
          <input
            {...register('password', {
              required: 'this field is required!',
              minLength: {
                min: 3,
                message: 'length must be at least 3 characters!',
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

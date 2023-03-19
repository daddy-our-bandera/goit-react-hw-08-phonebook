import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/operations';

export const RegisterForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = data => {
    dispatch(
      registration({
        name: data.username,
        email: data.email,
        password: data.password,
      })
    );
    console.log(registration);
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
            type="text"
          />
        </label>
        <div>
          {errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}
        </div>
        <label htmlFor="">
          Email:
          <input
            {...register('email', {
              required: 'this field is required!',
              minLength: {
                min: 3,
                message: 'length must be at least 3 characters!',
              },
            })}
            type="text"
          />
        </label>
        <label htmlFor="">
          Password:
          <input
            {...register('password', {
              required: 'this field is required!',
              minLength: {
                min: 8,
                max: 16,
                message: 'length must be at least 3 characters!',
              },
            })}
            type="text"
          />
        </label>

        <input type="submit" disabled={!isValid}></input>
      </form>
    </>
  );
};

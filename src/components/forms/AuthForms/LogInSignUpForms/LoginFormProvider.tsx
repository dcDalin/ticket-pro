import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import Input from '@/components/forms/Elements/Input';
import PasswordInput from '@/components/forms/Elements/PasswordInput';

import { loginFormLoading } from '@/redux/authForms/authFormsSlice';
import { RootState } from '@/redux/store';

type FormValues = {
  email: string;
  password: string;
};

export default function LoginFormProvider() {
  const dispatch = useDispatch();

  const { isLoginFormLoading } = useSelector(
    (state: RootState) => state.authForms
  );

  const methods = useForm<FormValues>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      dispatch(loginFormLoading());
      const { email, password } = data;
      return { email, password };
    } catch (error) {
      toast.error('Something went wrong, please try again');
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-0'>
        <Input
          id='email'
          label='Email'
          placeholder='email@address.com'
          validation={{
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Invalid email address',
            },
          }}
        />
        <PasswordInput
          id='password'
          label='Password'
          type='password'
          placeholder='**********'
          validation={{
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters',
            },
            required: 'Password is required',
          }}
        />

        <button
          disabled={isLoginFormLoading}
          className={`btn-primary btn-block btn my-6 ${
            isLoginFormLoading ? 'loading' : null
          }`}
          type='submit'
        >
          login
        </button>
      </form>
    </FormProvider>
  );
}

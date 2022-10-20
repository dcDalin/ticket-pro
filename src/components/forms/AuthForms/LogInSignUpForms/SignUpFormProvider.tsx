import { useRouter } from 'next/router';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

import nhost from '@/lib/nhost';
import useRedirectTo from '@/hooks/useRedirectTo';

import Input from '@/components/forms/Elements/Input';
import PasswordInput from '@/components/forms/Elements/PasswordInput';

import {
  signUpFormLoading,
  stopAuthFormLoading,
} from '@/redux/authForms/authFormsSlice';
import { RootState } from '@/redux/store';

type FormValues = {
  name: string;
  email: string;
  password: string;
};

export default function SignUpFormProvider() {
  const dispatch = useDispatch();
  const router = useRouter();
  const redirectTo = useRedirectTo();

  const { isSignUpFormLoading } = useSelector(
    (state: RootState) => state.authForms
  );

  const methods = useForm<FormValues>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      dispatch(signUpFormLoading());
      const { name, email, password } = data;

      const { error } = await nhost.auth.signUp({
        email,
        password,
        options: {
          displayName: name,
        },
      });

      if (error) {
        dispatch(stopAuthFormLoading());
        toast.error(error.message);
      } else {
        dispatch(stopAuthFormLoading());
        router.push(redirectTo);
      }
    } catch (error) {
      dispatch(stopAuthFormLoading());
      toast.error('Something went wrong, please try again');
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-0'>
        <Input
          id='name'
          label='Name'
          type='text'
          placeholder=''
          validation={{
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name is too short',
            },
            maxLength: {
              value: 35,
              message: 'Name is too long',
            },
            pattern: {
              value: /^[a-zA-Z0-9_ ]+$/,
              message: 'Invalid name',
            },
          }}
        />
        <Input
          id='email'
          label='Email'
          type='text'
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
          disabled={isSignUpFormLoading}
          className={`btn btn-primary btn-block my-6 ${
            isSignUpFormLoading ? 'loading' : null
          }`}
          type='submit'
        >
          sign up
        </button>
      </form>
    </FormProvider>
  );
}

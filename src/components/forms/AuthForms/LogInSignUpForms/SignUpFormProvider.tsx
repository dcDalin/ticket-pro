import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import nhost from '@/lib/nhost';

import Input from '@/components/forms/Elements/Input';
import PasswordInput from '@/components/forms/Elements/PasswordInput';

import {
  signUpFormLoading,
  stopAuthFormLoading,
} from '@/redux/authForms/authFormsSlice';
import { RootState } from '@/redux/store';

type FormValues = {
  username: string;
  email: string;
  password: string;
};

export default function SignUpFormProvider() {
  const dispatch = useDispatch();

  const { isSignUpFormLoading } = useSelector(
    (state: RootState) => state.authForms
  );

  const [usernameSearchLoading, setUserNameSearchLoading] = useState(false);

  const methods = useForm<FormValues>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      dispatch(signUpFormLoading());
      const { username, email, password } = data;

      const { error } = await nhost.auth.signUp({
        email,
        password,
        options: {
          displayName: username,
        },
      });

      if (error) {
        dispatch(stopAuthFormLoading());
      } else {
        // TODO: Redirect to home page or back
        dispatch(stopAuthFormLoading());
      }
    } catch (error) {
      dispatch(stopAuthFormLoading());
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-0'>
        <Input
          id='username'
          label='Username'
          placeholder=''
          loading={usernameSearchLoading}
          validation={{
            required: 'Username name is required',
            minLength: {
              value: 3,
              message: 'Username is too short',
            },
            maxLength: {
              value: 25,
              message: 'Username is too long',
            },
            pattern: {
              value: /^[a-zA-Z0-9_]+$/,
              message: 'Invalid Username',
            },
            validate: AwesomeDebouncePromise(async (value: string) => {
              try {
                setUserNameSearchLoading(true);
                // TODO: Crate a function for this
                const checkUserNameExists = await fetch(
                  `https://${process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN}.nhost.run/api/rest/check-username-exists/${value}`,
                  {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  }
                );

                const data = await checkUserNameExists.json();

                if (
                  (data && data.users && data.users === undefined) ||
                  data.users.length === 0
                ) {
                  setUserNameSearchLoading(false);
                  return true;
                }
                setUserNameSearchLoading(false);
                return 'Username already exists. Try another one';
              } catch (err) {
                setUserNameSearchLoading(false);
                return 'Something went wrong. Please try again';
              }
            }, 700),
          }}
        />
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
          disabled={isSignUpFormLoading || usernameSearchLoading}
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

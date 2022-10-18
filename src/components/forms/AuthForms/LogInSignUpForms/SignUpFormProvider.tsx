import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Input from '@/components/forms/Elements/Input';
import PasswordInput from '@/components/forms/Elements/PasswordInput';

type FormValues = {
  username: string;
  email: string;
  password: string;
};

export default function SignUpFormProvider() {
  const [usernameSearchLoading, setUserNameSearchLoading] = useState(false);

  const methods = useForm<FormValues>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormValues> = async () => {
    // try {
    //   const { username, email, password } = data;
    //   const res = await nhost.auth.signUp({
    //     email,
    //     password,
    //     options: {
    //       displayName: username,
    //     },
    //   });
    //   console.log('--------> res is: ', res);
    // } catch (error) {
    //   console.log('Erro is: ', error);
    // }
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
              value: /^[a-zA-Z0-9]+$/,
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

        <button className={`btn btn-primary btn-block my-6 `} type='submit'>
          Log in
        </button>
      </form>
    </FormProvider>
  );
}

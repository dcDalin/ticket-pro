import AwesomeDebouncePromise from 'awesome-debounce-promise';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useSelector } from 'react-redux';

import Input from '@/components/forms/Elements/Input';

import { RootState } from '@/redux/store';

type FormValues = {
  userName: string;
};

export default function ClaimUserNameProvider() {
  const [userNameSearchLoading, setUserNameSearchLoading] = useState(false);

  const { isLoginFormLoading } = useSelector(
    (state: RootState) => state.authForms
  );

  const methods = useForm<FormValues>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const { userName } = data;

    return userName;
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-0'>
        <Input
          id='userName'
          label='Username'
          placeholder=''
          loading={userNameSearchLoading}
          validation={{
            required: 'Username name is required',
            minLength: {
              value: 3,
              message: 'Username is too short',
            },
            maxLength: {
              value: 30,
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
                  `https://${process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN}.nhost.run/api/rest/check-username-exists/${value}`
                );

                const data = await checkUserNameExists.json();

                if (
                  (data && data.profile && data.profile === undefined) ||
                  data.profile.length === 0
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

        <button
          disabled={isLoginFormLoading}
          className={`btn-primary btn gap-2 ${
            isLoginFormLoading ? 'loading' : null
          }`}
          type='submit'
        >
          save
          <AiOutlineArrowRight />
        </button>
      </form>
    </FormProvider>
  );
}

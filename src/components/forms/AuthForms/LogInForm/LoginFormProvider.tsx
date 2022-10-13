import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import Input from '@/components/forms/Elements/Input';

type FormValues = {
  email: string;
  password: string;
};

export default function LoginFormProvider() {
  const methods = useForm<FormValues>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormValues> = async () => {
    // try {
    //   const { email, password } = data;
    // } catch (error) {}
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
        <Input
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

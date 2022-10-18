import Link from 'next/link';
import { BsGoogle } from 'react-icons/bs';
import { GrFacebook } from 'react-icons/gr';

import LoginFormProvider from '@/components/forms/AuthForms/LogInForm/LoginFormProvider';
import AuthFormLayout from '@/components/forms/FormLayouts/AuthFormLayout';

export default function LoginForm() {
  return (
    <AuthFormLayout title='Log in to your account'>
      <div className='flex flex-col divide-x-0 divide-y md:flex-row md:divide-x md:divide-y-0'>
        <div className='flex w-full flex-col space-y-4 px-4 pb-6 md:w-1/2 md:pb-0'>
          <button className='btn btn-outline my-2 w-full gap-2'>
            <BsGoogle />
            Continue with Google
          </button>
          <button className='btn btn-outline my-2 w-full gap-2'>
            <GrFacebook />
            Continue with Facebook
          </button>
        </div>
        <div className='w-full px-4 pt-6 md:w-1/2 md:pt-0'>
          <h3>Use your email and password</h3>

          <LoginFormProvider />

          <div className='flex flex-col items-center space-y-2'>
            <Link href=''>
              <span className='link link-primary mt-4'>
                Forgot your password?
              </span>
            </Link>

            <div className='flex items-center space-x-1'>
              <p>Don&apos;t have an account?</p>
              <Link href=''>
                <span className='link link-primary'>Create one today.</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AuthFormLayout>
  );
}

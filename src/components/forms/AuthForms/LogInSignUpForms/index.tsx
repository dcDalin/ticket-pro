import Link from 'next/link';
import { BsGoogle } from 'react-icons/bs';
import { GrFacebook } from 'react-icons/gr';

import LoginFormProvider from '@/components/forms/AuthForms/LogInSignUpForms/LoginFormProvider';
import SignUpFormProvider from '@/components/forms/AuthForms/LogInSignUpForms/SignUpFormProvider';
import SocialButton from '@/components/forms/AuthForms/LogInSignUpForms/SocialButton';
import AuthFormLayout from '@/components/forms/FormLayouts/AuthFormLayout';

import { LOG_IN, SIGN_UP } from '@/constants/routes';

interface ILoginSignUpFormsProps {
  form: 'login' | 'signup';
}

export default function LoginSignUpForms({ form }: ILoginSignUpFormsProps) {
  return (
    <AuthFormLayout
      title={
        form === 'login'
          ? 'Log in to your account'
          : 'Create your account today'
      }
    >
      <div className='flex flex-col divide-x-0 divide-y md:flex-row md:divide-x md:divide-y-0'>
        <div className='flex w-full flex-col space-y-4 px-4 pb-6 md:w-1/2 md:pb-0'>
          <SocialButton title='Continue with Google' icon={<BsGoogle />} />
          <SocialButton title='Continue with Facebook' icon={<GrFacebook />} />
        </div>
        <div className='w-full px-4 pt-6 md:w-1/2 md:pt-0'>
          {form === 'login' ? (
            <>
              <h3>Use your email and password</h3>
              <LoginFormProvider />
            </>
          ) : (
            <>
              <h3>Sign up using email</h3>
              <SignUpFormProvider />
            </>
          )}

          <div className='flex flex-col items-center space-y-2'>
            {form === 'login' ? (
              <>
                <Link href=''>
                  <span className='link link-primary mt-4'>
                    Forgot your password?
                  </span>
                </Link>

                <div className='flex items-center space-x-1'>
                  <p>Don&apos;t have an account?</p>
                  <Link href={SIGN_UP}>
                    <span className='link link-primary'>Create one today.</span>
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className='mt-4 flex items-center space-x-1'>
                  <p>By signing up you agree to our</p>
                  <Link href=''>
                    <span className='link link-primary'>terms of use.</span>
                  </Link>
                </div>
                <div className='mt-4 flex items-center space-x-1'>
                  <p>Already have an account?</p>
                  <Link href={LOG_IN}>
                    <span className='link link-primary'>Log in instead.</span>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </AuthFormLayout>
  );
}

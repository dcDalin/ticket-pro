import { BsGoogle } from 'react-icons/bs';
import { GrFacebook } from 'react-icons/gr';

import AuthFormLayout from '@/components/forms/FormLayouts/AuthFormLayout';

export default function LoginForm() {
  return (
    <AuthFormLayout title='Log in to your account'>
      <div className='flex flex-col space-x-0 space-y-8 md:flex-row md:space-x-10 md:space-y-0'>
        <div className='w-full md:w-1/2'>
          <button className='btn btn-outline my-2 w-full gap-2'>
            <BsGoogle />
            Continue with Google
          </button>
          <button className='btn btn-outline my-2 w-full gap-2'>
            <GrFacebook />
            Continue with Facebook
          </button>
        </div>
        <div className='w-full md:w-1/2'>
          <h3>Use your email and password</h3>
        </div>
      </div>
    </AuthFormLayout>
  );
}

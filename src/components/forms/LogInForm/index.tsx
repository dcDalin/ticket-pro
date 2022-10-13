import AuthFormLayout from '@/components/forms/FormLayouts/AuthFormLayout';

export default function LoginForm() {
  return (
    <AuthFormLayout title='Log in to your account'>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2'>left</div>
        <div className='w-full md:w-1/2'>right</div>
      </div>
    </AuthFormLayout>
  );
}

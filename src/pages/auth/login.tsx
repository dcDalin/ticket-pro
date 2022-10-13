import LoginForm from '@/components/forms/LogInForm';
import NoHeaderLayout from '@/components/layouts/NoHeaderLayout';

export default function LogInpage() {
  return (
    <NoHeaderLayout templateTitle='Log in' templateDescription='Sign up page'>
      <LoginForm />
    </NoHeaderLayout>
  );
}

import LoginSignUpForm from '@/components/forms/AuthForms/LogInSignUpForms';
import NoHeaderLayout from '@/components/layouts/NoHeaderLayout';

const LogInpage = () => {
  return (
    <NoHeaderLayout templateTitle='Log in' templateDescription='Sign up page'>
      <LoginSignUpForm form='login' />
    </NoHeaderLayout>
  );
};

export default LogInpage;

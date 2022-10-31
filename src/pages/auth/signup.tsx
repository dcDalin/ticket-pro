import LoginSignUpForms from '@/components/forms/AuthForms/LogInSignUpForms';
import NoHeaderLayout from '@/components/layouts/NoHeaderLayout';

const SignUpPage = () => {
  return (
    <NoHeaderLayout templateTitle='Log in' templateDescription='Sign up page'>
      <LoginSignUpForms form='signup' />
    </NoHeaderLayout>
  );
};
export default SignUpPage;

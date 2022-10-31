import CompleteProfileForm from '@/components/forms/CompleteProfileForm';
import NoHeaderLayout from '@/components/layouts/NoHeaderLayout';

const CompleteProfilePage = () => {
  return (
    <NoHeaderLayout
      templateTitle='Complete Profile'
      templateDescription='Complete Profile'
    >
      <CompleteProfileForm />
    </NoHeaderLayout>
  );
};

export default CompleteProfilePage;

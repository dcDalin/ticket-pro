import CompleteProfileForm from '@/components/forms/CompleteProfileForm';
import NoHeaderLayout from '@/components/layouts/NoHeaderLayout';

import withCompleteProfile from '@/HOC/withCompleteProfile';

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

export default withCompleteProfile(CompleteProfilePage);

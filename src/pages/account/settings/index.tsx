import UserSettingsAvatar from '@/components/avatar/UserSettingsAvatar';
import UpdateProfileForm from '@/components/forms/UpdateProfileForm';
import SettingsLayout from '@/components/layouts/SettingsLayout';

import withAuthentication from '@/HOC/withAuthentication';

function SettingsPage() {
  return (
    <SettingsLayout
      templateTitle=''
      templateDescription=''
      title='Update profile'
    >
      <UserSettingsAvatar />
      <UpdateProfileForm />
    </SettingsLayout>
  );
}

export default withAuthentication(SettingsPage);

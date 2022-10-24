import UserSettingsAvatar from '@/components/avatar/UserSettingsAvatar';
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
    </SettingsLayout>
  );
}

export default withAuthentication(SettingsPage);

import SettingsLayout from '@/components/layouts/SettingsLayout';

import withAuthentication from '@/HOC/withAuthentication';

function ChangePasswordPage() {
  return (
    <SettingsLayout
      templateTitle=''
      templateDescription=''
      title='Change password'
    >
      password change
    </SettingsLayout>
  );
}

export default withAuthentication(ChangePasswordPage);

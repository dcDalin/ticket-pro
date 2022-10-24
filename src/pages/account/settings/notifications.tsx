import SettingsLayout from '@/components/layouts/SettingsLayout';

import withAuthentication from '@/HOC/withAuthentication';

function NotificationsPage() {
  return (
    <SettingsLayout templateTitle='' templateDescription=''>
      notifications
    </SettingsLayout>
  );
}

export default withAuthentication(NotificationsPage);

import SettingsLayout from '@/components/layouts/SettingsLayout';

import withAuthentication from '@/HOC/withAuthentication';

function SettingsPage() {
  return (
    <SettingsLayout templateTitle='' templateDescription=''>
      right
    </SettingsLayout>
  );
}

export default withAuthentication(SettingsPage);

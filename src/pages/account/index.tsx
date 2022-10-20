import AppLayout from '@/components/layouts/AppLayout';

import withAuthentication from '@/HOC/withAuthentication';

function AccountPage() {
  return (
    <AppLayout templateTitle='Account' templateDescription='Account page'>
      <h1>Account page</h1>
    </AppLayout>
  );
}

export default withAuthentication(AccountPage);

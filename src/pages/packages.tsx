import AppLayout from '@/components/layouts/AppLayout';

import withPage from '@/HOC/withPage';

function PackagesPage() {
  return (
    <AppLayout templateTitle='Packages' templateDescription='Home page'>
      <h1>home page</h1>
    </AppLayout>
  );
}

export default withPage(PackagesPage);

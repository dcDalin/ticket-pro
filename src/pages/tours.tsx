import AppLayout from '@/components/layouts/AppLayout';

import withPage from '@/HOC/withPage';

function ToursPage() {
  return (
    <AppLayout templateTitle='Tours' templateDescription='Home page'>
      <h1>home page</h1>
    </AppLayout>
  );
}

export default withPage(ToursPage);

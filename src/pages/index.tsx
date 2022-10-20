import AppLayout from '@/components/layouts/AppLayout';

import withPage from '@/HOC/withPage';

function HomePage() {
  return (
    <AppLayout templateTitle='Home' templateDescription='Home page'>
      <h1>home page</h1>
    </AppLayout>
  );
}

export default withPage(HomePage);

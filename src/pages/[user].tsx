import AppLayout from '@/components/layouts/AppLayout';

import withPage from '@/HOC/withPage';

function UserProfilePage() {
  // const router = useRouter();
  // const userId = useUserId();
  // const accessToken = useAccessToken();

  // const path = router.query.user as string;

  return (
    <AppLayout templateTitle='Tours' templateDescription='Home page'>
      <h1>home page</h1>
    </AppLayout>
  );
}

export default withPage(UserProfilePage);

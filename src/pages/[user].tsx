import { useRouter } from 'next/router';

import useUserProfile from '@/hooks/useFetchUserProfileByUsername';

import AppLayout from '@/components/layouts/AppLayout';

import withPage from '@/HOC/withPage';

function UserProfilePage() {
  const router = useRouter();

  const userName = router.query.user as string;

  const { loading, data, error } = useUserProfile(userName);

  if (loading) return <p>loading</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <AppLayout templateTitle='Tours' templateDescription='Home page'>
      {JSON.stringify(data)}
    </AppLayout>
  );
}

export default withPage(UserProfilePage);

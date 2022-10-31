import { useRouter } from 'next/router';
import { AiOutlinePlus } from 'react-icons/ai';

import useUserProfile from '@/hooks/useFetchUserProfileByUsername';

import Avatar from '@/components/avatar';
import AppLayout from '@/components/layouts/AppLayout';
import Container from '@/components/layouts/Container';

function UserProfilePage() {
  const router = useRouter();

  const path = router.query.user as string;

  const { loading, data, error } = useUserProfile(path);

  if (loading) return <p>loading</p>;
  if (error) return <p>{JSON.stringify(error)}</p>;

  const {
    userName,
    user: { avatarUrl, displayName },
  } = data.profile[0];

  return (
    <AppLayout templateTitle='Tours' templateDescription='Home page'>
      <Container>
        <div className='flex items-center space-x-4 md:space-x-8'>
          <Avatar url={avatarUrl} alt={userName} />
          <div>
            <h2 className='font-bold'>{userName}</h2>
            <h2 className='text-2xl font-bold'>{displayName}</h2>
          </div>
        </div>

        <div className='py-4 md:py-8'>
          <button className='btn-primary btn-square btn'>
            <AiOutlinePlus />
          </button>
        </div>
      </Container>
    </AppLayout>
  );
}

export default UserProfilePage;

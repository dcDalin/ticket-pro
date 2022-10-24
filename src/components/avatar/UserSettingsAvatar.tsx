import { useUserAvatarUrl, useUserId } from '@nhost/nextjs';
import { useAuthQuery } from '@nhost/react-apollo';
import Image from 'next/image';

import { FETCH_USER_NAME_BY_PK } from '@/graphql/queries';

function UserNameLoading() {
  return (
    <div className='flex flex-col space-y-2'>
      <div className='h-4 w-20 animate-pulse rounded-sm bg-gray-100'></div>
      <div className='h-8 w-20 animate-pulse rounded-sm bg-gray-100'></div>
    </div>
  );
}
export default function UserSettingsAvatar() {
  const avatar = useUserAvatarUrl();
  const userId = useUserId();

  const { loading, data } = useAuthQuery(FETCH_USER_NAME_BY_PK, {
    variables: { id: userId },
  });

  return (
    <div className='flex items-center space-x-4'>
      <div className='avatar'>
        <div className='w-14 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100 md:w-16'>
          {avatar ? (
            <Image src={avatar} alt='Avatar' width={100} height={100} />
          ) : null}
        </div>
      </div>
      <div>
        {loading ? (
          <UserNameLoading />
        ) : data ? (
          <div className='flex flex-col space-y-2'>
            <h2 className='font-bold'>{data.profile_by_pk.userName}</h2>
            <button className='btn btn-outline btn-xs overflow-auto'>
              Change profile photo
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

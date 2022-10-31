import { useUserAvatarUrl } from '@nhost/nextjs';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import userProfile from '@/hooks/useFetchUserProfileByPk';

import { CHANGE_PROFILE_PHOTO } from '@/constants/modalNames';
import { openSettingsModal } from '@/redux/modals/updateSettingsmodalSlice';

function UserNameLoading() {
  return (
    <div className='flex flex-col space-y-2'>
      <div className='h-4 w-20 animate-pulse rounded-sm bg-gray-100'></div>
      <div className='h-6 w-full animate-pulse rounded-md bg-gray-100'></div>
    </div>
  );
}
export default function UserSettingsAvatar() {
  const dispatch = useDispatch();
  const avatar = useUserAvatarUrl();
  const { loading, data } = userProfile();

  return (
    <div className='grid grid-cols-6 gap-x-4'>
      <div className='col-span-2 text-right'>
        <div className='avatar'>
          <div className='w-14 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100 md:w-16'>
            {avatar ? (
              <Image src={avatar} alt='Avatar' width={100} height={100} />
            ) : null}
          </div>
        </div>
      </div>
      <div className='col-span-4'>
        {loading ? (
          <UserNameLoading />
        ) : data ? (
          <div className='flex flex-col space-y-2'>
            <h2 className='font-bold'>{data.userName}</h2>
            <button
              className='btn btn-outline btn-xs overflow-auto'
              onClick={() => dispatch(openSettingsModal(CHANGE_PROFILE_PHOTO))}
            >
              Change profile photo
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

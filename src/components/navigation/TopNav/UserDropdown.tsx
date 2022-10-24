import {
  useAuthenticationStatus,
  useSignOut,
  useUserAvatarUrl,
  useUserDisplayName,
} from '@nhost/nextjs';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';

import DropDownLink from '@/components/navigation/TopNav/DropDownLink';

import { REDIRECT_TO } from '@/constants/localStorage';
import { ACCOUNT, LOG_IN, SETTINGS } from '@/constants/routes';

export default function UserDropdown() {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useAuthenticationStatus();
  const avatar = useUserAvatarUrl();
  const displayName = useUserDisplayName();
  const { signOut } = useSignOut();

  const navigateToAuthPage = () => {
    // set path user was on before navigating to auth pages
    // update local storage
    localStorage.setItem(REDIRECT_TO, router.pathname);
    router.push(LOG_IN);
  };

  const navigateToSettingsPage = () => {
    // set path user was on before navigating to auth pages
    // update local storage
    localStorage.setItem(REDIRECT_TO, router.pathname);
    router.push(SETTINGS);
  };

  return (
    <div className='dropdown dropdown-end'>
      <label
        tabIndex={0}
        className='btn btn-outline btn-sm rounded-full px-2 md:btn-md'
      >
        <div className='flex items-center space-x-2'>
          <BiMenuAltRight className='h-6 w-6' />
          {isAuthenticated ? (
            <div className='avatar flex items-center justify-center'>
              {displayName ? (
                <span className='flex items-center justify-center pr-2'>
                  {displayName.split(' ')[0]}
                </span>
              ) : null}
              <div
                className={`h-6 w-6 rounded-full bg-gray-300 md:h-8 md:w-8 ${
                  isLoading && 'animate-pulse cursor-wait'
                }`}
              >
                {avatar ? (
                  <Image src={avatar} alt='Avatar' width={100} height={100} />
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </label>

      <ul
        tabIndex={0}
        className='dropdown-content menu rounded-box mt-2 w-52 bg-base-100 p-2 shadow'
      >
        {isAuthenticated ? (
          <>
            <DropDownLink
              handleClick={() => router.push(ACCOUNT)}
              title='My profile'
              icon={<CgProfile />}
            />
            <DropDownLink
              handleClick={navigateToSettingsPage}
              title='Settings'
              icon={<FiSettings />}
            />
            <div className='divider m-0'></div>
            <DropDownLink
              handleClick={signOut}
              title='Log out'
              icon={<AiOutlineLogout />}
            />
          </>
        ) : (
          <DropDownLink
            handleClick={navigateToAuthPage}
            title='Sign in'
            icon={<AiOutlineLogin />}
          />
        )}
      </ul>
    </div>
  );
}

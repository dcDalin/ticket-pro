import { useRouter } from 'next/router';
import { AiOutlineLogin } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';

import DropDownLink from '@/components/navigation/TopNav/DropDownLink';

import { REDIRECT_TO } from '@/constants/localStorage';
import { LOG_IN } from '@/constants/routes';

export default function UserDropdown() {
  const router = useRouter();

  const navigateToAuthPage = () => {
    // set path user was on before navigating to auth pages
    // update local storage
    localStorage.setItem(REDIRECT_TO, router.asPath);
    router.push(LOG_IN);
  };

  return (
    <div className='dropdown-end dropdown'>
      <label
        tabIndex={0}
        className='btn-outline btn-sm btn rounded-full px-2 md:btn-md'
      >
        <div className='flex items-center space-x-2'>
          <BiMenuAltRight className='h-6 w-6' />

          <div className='avatar flex items-center justify-center'>
            <div className='h-6 w-6 rounded-full bg-gray-300 md:h-8 md:w-8 '></div>
          </div>
        </div>
      </label>

      <ul
        tabIndex={0}
        className='dropdown-content menu rounded-box mt-2 w-52 bg-base-100 p-2 shadow'
      >
        <DropDownLink
          handleClick={navigateToAuthPage}
          title='Sign in'
          icon={<AiOutlineLogin />}
        />
      </ul>
    </div>
  );
}

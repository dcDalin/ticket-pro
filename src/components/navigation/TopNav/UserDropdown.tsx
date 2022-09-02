import Link from 'next/link';
import { BiMenuAltRight } from 'react-icons/bi';

import { SIGN_UP } from '@/constants/routes';
export default function UserDropdown() {
  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className='bg- btn btn-outline rounded-full px-2'>
        <div className='flex items-center space-x-2'>
          <BiMenuAltRight className='h-8 w-8' />
          <div className='avatar'>
            <div className='h-8 rounded-full'>
              {/* <img src='https://placeimg.com/192/192/people' /> */}
            </div>
          </div>
        </div>
      </label>

      <ul
        tabIndex={0}
        className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow'
      >
        <li>
          <Link href={SIGN_UP} className='justify-between'>
            Sign up
          </Link>
        </li>
        <li>
          <a>Log in</a>
        </li>
        <div className='divider'></div>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
}

import UserDropdown from '@/components/navigation/TopNav/UserDropdown';

import { APP_NAME } from '@/constants/app';

export default function TopNav() {
  return (
    <div className='navbar border-b bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost px-0 text-xl normal-case'>{APP_NAME}</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal p-0'>
          <li className='mx-2 hidden font-bold md:flex'>
            <a>Become a publisher</a>
          </li>
          <UserDropdown />
        </ul>
      </div>
    </div>
  );
}

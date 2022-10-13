import useNavItems from '@/hooks/useNavItems';

import TopNavItem from '@/components/navigation/TopNav/TopNavItem';
import UserDropdown from '@/components/navigation/TopNav/UserDropdown';

import { APP_NAME } from '@/constants/app';

export default function TopNav() {
  const navItems = useNavItems();

  return (
    <div className='flex h-16 items-center justify-between border-b bg-base-100 p-0 px-4'>
      <div>
        <h1 className='text-xl normal-case'>{APP_NAME}</h1>
      </div>

      <div className='hidden h-full items-center md:flex'>
        {navItems && navItems.length
          ? navItems.map(({ title, icon, path }, index) => (
              <TopNavItem key={index} title={title} icon={icon} path={path} />
            ))
          : null}
      </div>
      <div className='flex items-center space-x-4'>
        <div className='btn btn-link mx-2 hidden font-bold md:flex'>
          Become a publisher
        </div>
        <ul className='menu menu-horizontal p-0'>
          <UserDropdown />
        </ul>
      </div>
    </div>
  );
}

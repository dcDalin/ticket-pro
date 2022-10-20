import useNavItems from '@/hooks/useNavItems';

import AppTitle from '@/components/navigation/AppTitle';
import TopNavItem from '@/components/navigation/TopNav/TopNavItem';
import UserDropdown from '@/components/navigation/TopNav/UserDropdown';

export default function TopNav() {
  const navItems = useNavItems();

  return (
    <div className='flex h-12 items-center justify-between border-b bg-base-100 p-0 px-4 md:h-16'>
      <div className='w-full'>
        <AppTitle />
      </div>

      <div className='hidden h-full w-full items-center justify-center md:flex'>
        {navItems && navItems.length
          ? navItems.map(({ title, icon, path }, index) => (
              <TopNavItem key={index} title={title} icon={icon} path={path} />
            ))
          : null}
      </div>
      <div className='flex w-full items-center justify-end space-x-4'>
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

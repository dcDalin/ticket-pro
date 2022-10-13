import useNavItems from '@/hooks/useNavItems';

import BottomNavItem from '@/components/navigation/BottomNav/BottomNavItem';

export default function BottomNav() {
  const navItems = useNavItems();

  return (
    <div className='btm-nav flex md:hidden'>
      {navItems && navItems.length
        ? navItems.map(({ title, icon, path }) => (
            <BottomNavItem key={title} icon={icon} title={title} path={path} />
          ))
        : null}
    </div>
  );
}

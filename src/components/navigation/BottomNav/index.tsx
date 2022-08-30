import { useRouter } from 'next/router';
import { BiHomeAlt } from 'react-icons/bi';
import { FaRegUserCircle } from 'react-icons/fa';

import BottomNavItem from '@/components/navigation/BottomNav/BottomNavItem';

import { HOME } from '@/constant/routes';

export default function BottomNav() {
  const router = useRouter();

  const handleRedirect = (path: string) => {
    router.push(path);
  };

  const bottomNavItems = [
    {
      title: 'Home',
      icon: <BiHomeAlt />,
      handleClick: () => handleRedirect(HOME),
      active: router.pathname === HOME,
    },
    {
      title: 'Home',
      icon: <BiHomeAlt />,
      handleClick: () => handleRedirect(HOME),
      active: router.pathname === HOME,
    },
    {
      title: 'Sign in',
      icon: <FaRegUserCircle />,
      handleClick: () => handleRedirect(HOME),
    },
  ];

  return (
    <div className='btm-nav flex md:hidden'>
      {bottomNavItems && bottomNavItems.length
        ? bottomNavItems.map(({ title, icon, active, handleClick }) => (
            <BottomNavItem
              key={title}
              icon={icon}
              active={active}
              title={title}
              handleClick={handleClick}
            />
          ))
        : null}
    </div>
  );
}

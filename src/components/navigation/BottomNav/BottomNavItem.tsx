import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface IBottomNavItemProps {
  icon: ReactNode;
  title: string;
  path: string;
}

export default function BottomNavItem({
  icon,
  title,
  path,
}: IBottomNavItemProps) {
  const router = useRouter();

  return (
    <button
      className={`${
        router.pathname === path && 'border-t-2 border-primary'
      } cursor-pointer`}
      onClick={() => router.push(path)}
    >
      {icon}
      <span className='btm-nav-label'>{title}</span>
    </button>
  );
}

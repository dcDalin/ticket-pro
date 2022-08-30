import { ReactNode } from 'react';

interface IBottomNavItemProps {
  active?: boolean;
  icon: ReactNode;
  title: string;
  handleClick: () => void;
}

export default function BottomNavItem({
  active = false,
  icon,
  title,
  handleClick,
}: IBottomNavItemProps) {
  return (
    <button className={`${active && 'active'}`} onClick={handleClick}>
      {icon}
      <span className='btm-nav-label'>{title}</span>
    </button>
  );
}

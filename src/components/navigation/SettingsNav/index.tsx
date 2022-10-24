import { useRouter } from 'next/router';
import { AiOutlineSetting } from 'react-icons/ai';
import { MdOutlineNotificationsActive, MdPassword } from 'react-icons/md';

import {
  SETTINGS,
  SETTINGS_CHANGE_PASSWORD,
  SETTINGS_NOTIFICATIONS,
} from '@/constants/routes';

interface ISettingsNavItemProps {
  path: string;
  title: string;
  icon: React.ReactNode;
}

function SettingsNavItem({ path, title, icon }: ISettingsNavItemProps) {
  const router = useRouter();

  return (
    <li onClick={() => router.push(path)} className='w-full'>
      <a
        className={`flex items-center justify-center md:justify-start ${
          router.pathname === path && 'active'
        }`}
      >
        <div className='flex items-center text-center'>{icon}</div>
        <span className='hidden md:block'>{title}</span>
      </a>
    </li>
  );
}

export default function SettingsNav() {
  const settingsNavItems = [
    {
      title: 'Edit profile',
      path: SETTINGS,
      icon: <AiOutlineSetting />,
    },
    {
      title: 'Change password',
      path: SETTINGS_CHANGE_PASSWORD,
      icon: <MdPassword />,
    },
    {
      title: 'Notifications',
      path: SETTINGS_NOTIFICATIONS,
      icon: <MdOutlineNotificationsActive />,
    },
  ];

  return (
    <ul className='menu w-full bg-base-100'>
      {settingsNavItems && settingsNavItems.length
        ? settingsNavItems.map(({ title, path, icon }, index) => {
            return (
              <SettingsNavItem
                key={index}
                path={path}
                title={title}
                icon={icon}
              />
            );
          })
        : null}
    </ul>
  );
}

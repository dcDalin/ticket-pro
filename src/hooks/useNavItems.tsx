import { BiHomeAlt } from 'react-icons/bi';
import { GrCatalog } from 'react-icons/gr';
import { MdOutlineDirectionsBusFilled } from 'react-icons/md';
import { TiTicket } from 'react-icons/ti';

import { EVENTS, HOME, PACKAGES, TOURS } from '@/constants/routes';

export default function useNavItems() {
  const navItems = [
    {
      title: 'Home',
      icon: <BiHomeAlt />,
      path: HOME,
    },
    {
      title: 'Tours',
      icon: <MdOutlineDirectionsBusFilled />,
      path: TOURS,
    },
    {
      title: 'Events',
      icon: <TiTicket />,
      path: EVENTS,
    },
    {
      title: 'Packages',
      icon: <GrCatalog />,
      path: PACKAGES,
    },
  ];

  return navItems;
}

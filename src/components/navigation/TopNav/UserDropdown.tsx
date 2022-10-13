import { BiMenuAltRight } from 'react-icons/bi';

import DropDownLink from '@/components/navigation/TopNav/DropDownLink';

export default function UserDropdown() {
  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className='btn btn-outline rounded-full px-2'>
        <div className='flex items-center space-x-2'>
          <BiMenuAltRight className='h-6 w-6' />
          <div className='avatar'>
            <div className='h-8 w-8 rounded-full bg-gray-300'>
              {/* <img src='https://placeimg.com/192/192/people' /> */}
            </div>
          </div>
        </div>
      </label>

      <ul
        tabIndex={0}
        className='dropdown-content menu rounded-box mt-2 w-52 bg-base-100 p-2 shadow'
      >
        <DropDownLink />

        <div className='divider m-0'></div>
        <DropDownLink />
      </ul>
    </div>
  );
}

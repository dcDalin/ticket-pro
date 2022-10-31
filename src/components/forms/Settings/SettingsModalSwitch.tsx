import { useSelector } from 'react-redux';

import UpdateUserNameProvider from '@/components/forms/Settings/UpdateUserNameProvider';

import {
  CHANGE_PROFILE_PHOTO,
  DISPLAY_NAME,
  USER_NAME,
} from '@/constants/modalNames';
import { RootState } from '@/redux/store';

interface ISettingsWrapperProps {
  title: string;
  children: React.ReactNode;
}

function SettingsWrapper({ title, children }: ISettingsWrapperProps) {
  return (
    <div>
      <h3 className='text-lg font-bold'>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

export default function SettingsModalSwitch() {
  const { modalToOpen } = useSelector(
    (state: RootState) => state.updateSettingsModal
  );

  switch (modalToOpen) {
    case DISPLAY_NAME:
      return (
        <SettingsWrapper title='Update name'>
          <UpdateUserNameProvider />
        </SettingsWrapper>
      );
    case USER_NAME:
      return (
        <SettingsWrapper title='Update username'>
          <UpdateUserNameProvider />
        </SettingsWrapper>
      );
    case CHANGE_PROFILE_PHOTO:
      return (
        <SettingsWrapper title='Upload new profile photo'>
          <UpdateUserNameProvider />
        </SettingsWrapper>
      );
    default:
      return null;
  }
}

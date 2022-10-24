import { useDispatch } from 'react-redux';

import UserSettingsAvatar from '@/components/avatar/UserSettingsAvatar';
import ValueInput from '@/components/forms/Elements/ValueInput';
import SettingsLayout from '@/components/layouts/SettingsLayout';

import { DISPLAY_NAME, USER_NAME } from '@/constants/modalNames';
import withAuthentication from '@/HOC/withAuthentication';
import { openSettingsModal } from '@/redux/modals/updateSettingsmodalSlice';

function SettingsPage() {
  const dispatch = useDispatch();

  const settingsInputs = [
    {
      label: 'Name',
      value: 'dc_dalin',
      handleClick: () => dispatch(openSettingsModal(DISPLAY_NAME)),
      info: '',
    },
    {
      label: 'Username',
      value: 'dc_dalin',
      handleClick: () => dispatch(openSettingsModal(USER_NAME)),
      info: 'Some info about this here',
    },
  ];
  return (
    <SettingsLayout
      templateTitle=''
      templateDescription=''
      title='Update profile'
    >
      <UserSettingsAvatar />
      <div className='pt-4'>
        {settingsInputs && settingsInputs.length
          ? settingsInputs.map(({ label, value, handleClick, info }, index) => {
              return (
                <ValueInput
                  key={index}
                  label={label}
                  value={value}
                  handleClick={handleClick}
                  info={info}
                />
              );
            })
          : null}
      </div>

      <div className='grid grid-cols-6 gap-x-4'>
        <div className='link col-span-4 col-start-3'>
          Switch to business account?
        </div>
      </div>
    </SettingsLayout>
  );
}

export default withAuthentication(SettingsPage);

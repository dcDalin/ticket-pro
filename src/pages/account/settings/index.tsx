import { useDispatch } from 'react-redux';

import userProfile from '@/hooks/useFetchUserProfileByPk';

import UserSettingsAvatar from '@/components/avatar/UserSettingsAvatar';
import ValueInput from '@/components/forms/Elements/ValueInput';
import SettingsLayout from '@/components/layouts/SettingsLayout';

import { DISPLAY_NAME, USER_NAME } from '@/constants/modalNames';
import { openSettingsModal } from '@/redux/modals/updateSettingsmodalSlice';

function SettingsPage() {
  const dispatch = useDispatch();
  const { loading: userProfileLoading, data } = userProfile();
  const displayName = 'dalin';

  const settingsInputs = [
    {
      label: 'Name',
      value: data.userName,
      handleClick: () => dispatch(openSettingsModal(DISPLAY_NAME)),
      info: 'Could be your business name',
      loading: userProfileLoading,
    },
    {
      label: 'Username',
      value: displayName,
      handleClick: () => dispatch(openSettingsModal(USER_NAME)),
      info: 'Unique name associated with your profile URL',
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
          ? settingsInputs.map(
              ({ label, value, handleClick, info, loading }, index) => {
                return (
                  <ValueInput
                    key={index}
                    label={label}
                    value={value}
                    handleClick={handleClick}
                    info={info}
                    loading={loading}
                  />
                );
              }
            )
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

export default SettingsPage;

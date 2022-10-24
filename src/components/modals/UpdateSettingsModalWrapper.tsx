import { MdOutlineClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import SettingsModalSwitch from '@/components/forms/Settings/SettingsModalSwitch';

import { closeModals } from '@/redux/modals/updateSettingsmodalSlice';
import { RootState } from '@/redux/store';

export default function UpdateSettingsModalWrapper() {
  const dispatch = useDispatch();

  const { isSettingsModalOpen } = useSelector(
    (state: RootState) => state.updateSettingsModal
  );

  const open = isSettingsModalOpen;
  return (
    <div className={`modal ${open && 'modal-open'}`}>
      <div className='modal-box relative'>
        <label
          className='absolute right-2 top-2 cursor-pointer focus:ring'
          onClick={() => dispatch(closeModals())}
        >
          <MdOutlineClose className='h-6 w-6' />
        </label>
        <SettingsModalSwitch />
      </div>
    </div>
  );
}

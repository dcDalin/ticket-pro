import { MdOutlineClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

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
          className='absolute right-2 top-2'
          onClick={() => dispatch(closeModals())}
        >
          <MdOutlineClose className='h-6 w-6' />
        </label>
        <h3 className='text-lg font-bold'>
          Congratulations random Internet user!
        </h3>
        <p className='py-4'>Modal stuff</p>
      </div>
    </div>
  );
}

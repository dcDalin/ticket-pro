import { useSelector } from 'react-redux';

import { RootState } from '@/redux/store';

export default function ModalWrapper() {
  const { isAuthModalOpen } = useSelector((state: RootState) => state.modals);

  const open = isAuthModalOpen;
  return (
    <div className={`modal ${open && 'modal-open'}`}>
      <div className='modal-box'>
        <h3 className='text-lg font-bold'>
          Congratulations random Internet user!
        </h3>
        <p className='py-4'>
          been selected for a chance to get one year of subscription to use
          Wikipedia for free!
        </p>
        <div className='modal-action'>
          <a href='#' className='btn'>
            Yay!
          </a>
        </div>
      </div>
    </div>
  );
}

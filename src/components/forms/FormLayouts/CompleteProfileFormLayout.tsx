import { ReactNode } from 'react';

import AppTitle from '@/components/navigation/AppTitle';
import UserDropdown from '@/components/navigation/TopNav/UserDropdown';

interface ICompleteProfileFormProps {
  children: ReactNode;
  title: string;
}

export default function CompleteProfileForm({
  children,
  title,
}: ICompleteProfileFormProps) {
  return (
    <div className='mx-auto my-0 w-full max-w-4xl border-0 bg-base-100 pb-10 shadow-none md:my-5 md:border md:shadow-xl'>
      <div className='flex h-16 items-center justify-between px-4'>
        <div className=''>
          <AppTitle />
        </div>
        <UserDropdown />
      </div>
      <h2 className='py-2 px-4 font-bold'>{title}</h2>
      {children}
    </div>
  );
}

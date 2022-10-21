import { ReactNode } from 'react';

import AppTitle from '@/components/navigation/AppTitle';
import UserDropdown from '@/components/navigation/TopNav/UserDropdown';

interface ICompleteProfileFormProps {
  children: ReactNode;
  title: string;
  maxWidth?: string;
  subTitle?: string;
}

export default function CompleteProfileForm({
  children,
  title,
  maxWidth = 'max-w-4xl',
  subTitle,
}: ICompleteProfileFormProps) {
  return (
    <div
      className={`mx-auto my-0 w-full ${maxWidth} border-0 bg-base-100 pb-10 shadow-none md:my-5 md:border md:shadow-xl`}
    >
      <div className='flex h-16 items-center justify-between px-4'>
        <div className=''>
          <AppTitle />
        </div>
        <UserDropdown />
      </div>
      <div className='flex items-center space-x-1 py-2 px-4'>
        <h2 className='font-bold'>{title}</h2>
        {subTitle ? <h4>{subTitle}</h4> : null}
      </div>
      {children}
    </div>
  );
}

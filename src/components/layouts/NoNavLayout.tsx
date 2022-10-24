import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { MdArrowBack } from 'react-icons/md';

import useRedirectTo from '@/hooks/useRedirectTo';

import AppTitle from '@/components/navigation/AppTitle';

interface INoNavLayoutProps {
  children: ReactNode;
  title?: string;
  maxWidth?: string;
  subTitle?: string;
}

export default function NoNavLayout({
  children,
  title,
  maxWidth = 'max-w-4xl',
  subTitle,
}: INoNavLayoutProps) {
  const router = useRouter();
  const redirectTo = useRedirectTo();
  return (
    <div
      className={`mx-auto my-0 w-full ${maxWidth} border-0 bg-base-100 pb-10 shadow-none md:my-5 md:border md:shadow-xl`}
    >
      <div className='flex h-16 items-center justify-between px-4'>
        <div className='w-full'>
          <MdArrowBack
            className='h-full w-6 cursor-pointer md:h-full md:w-8'
            onClick={() => router.push(redirectTo)}
          />
        </div>
        <div className='w-full justify-center text-center'>
          <AppTitle />
        </div>
        <div className='w-full justify-items-end text-right'></div>
      </div>
      <div className='flex items-center space-x-1 py-2 px-4'>
        {title ? <h2 className='font-bold'>{title}</h2> : null}
        {subTitle ? <h4>{subTitle}</h4> : null}
      </div>
      {children}
    </div>
  );
}

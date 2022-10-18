import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { MdArrowBack } from 'react-icons/md';

import AppTitle from '@/components/navigation/AppTitle';

interface IAuthFormLayoutProps {
  children: ReactNode;
  title: string;
}

export default function AuthFormLayout({
  children,
  title,
}: IAuthFormLayoutProps) {
  const router = useRouter();

  return (
    <div className='mx-auto my-0 w-full max-w-4xl border-0 bg-base-100 pb-10 shadow-none md:my-5 md:border md:shadow-xl'>
      <div className='flex h-16 flex-nowrap items-center px-4'>
        <MdArrowBack
          className='h-full w-6 cursor-pointer md:h-full md:w-8'
          onClick={() => router.back()}
        />
        <div className='grow text-center'>
          <AppTitle />
        </div>
      </div>
      <h2 className='py-2 px-4 font-bold'>{title}</h2>
      {children}
    </div>
  );
}

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
    <div className='mx-auto my-0 w-full max-w-2xl bg-base-100 px-4 pb-10 shadow-none md:my-5 md:shadow-xl'>
      <div className='flex h-16 flex-nowrap items-center'>
        <MdArrowBack
          className='h-6 w-6 cursor-pointer md:h-8 md:w-8'
          onClick={() => router.back()}
        />
        <div className='grow text-center'>
          <AppTitle />
        </div>
      </div>
      <div>
        <h2 className='py-2 font-bold'>{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
}

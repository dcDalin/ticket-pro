import { ReactNode } from 'react';

import NoHeaderLayout from '@/components/layouts/NoHeaderLayout';
import NoNavLayout from '@/components/layouts/NoNavLayout';
import SettingsNav from '@/components/navigation/SettingsNav';

interface ISettingsLayoutProps {
  templateTitle: string;
  templateDescription: string;
  children: ReactNode;
  title?: string;
  subTitle?: string;
}

export default function SettingsLayout({
  templateDescription,
  templateTitle,
  children,
  title,
  subTitle,
}: ISettingsLayoutProps) {
  return (
    <NoHeaderLayout
      templateTitle={templateTitle}
      templateDescription={templateDescription}
    >
      <NoNavLayout>
        <div className='flex min-h-screen divide-x md:min-h-fit'>
          <div className='w-20 md:w-1/3'>
            <SettingsNav />
          </div>
          <div className='w-full pl-4 md:pl-8'>
            {title || subTitle ? (
              <div className='flex items-center space-x-1 pb-4 md:hidden'>
                {title ? <h2 className='text-xl font-bold'>{title}</h2> : null}
                {subTitle ? <h4>{subTitle}</h4> : null}
              </div>
            ) : null}

            <div className='pr-4 md:pr-8'>{children}</div>
          </div>
        </div>
      </NoNavLayout>
    </NoHeaderLayout>
  );
}

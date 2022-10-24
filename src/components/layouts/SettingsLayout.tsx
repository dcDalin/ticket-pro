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
        <div className='mr-4 flex divide-x'>
          <div className='w-20 md:w-1/4'>
            <SettingsNav />
          </div>
          <div className='px-4'>
            {title || subTitle ? (
              <div className='flex items-center space-x-1 pb-2 md:hidden'>
                {title ? <h2 className='font-bold'>{title}</h2> : null}
                {subTitle ? <h4>{subTitle}</h4> : null}
              </div>
            ) : null}
            {children}
          </div>
        </div>
      </NoNavLayout>
    </NoHeaderLayout>
  );
}

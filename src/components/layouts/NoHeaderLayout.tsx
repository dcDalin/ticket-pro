import { ReactNode } from 'react';

import Seo from '@/components/Seo';

interface ILayoutProps {
  children: ReactNode;
  templateTitle: string;
  templateDescription: string;
  templateDate?: string;
}

export default function NoHeaderLayout({
  children,
  templateTitle,
  templateDescription,
  templateDate,
}: ILayoutProps) {
  return (
    <div>
      <Seo
        templateTitle={templateTitle}
        description={templateDescription}
        date={templateDate}
      />
      <main>{children}</main>
    </div>
  );
}

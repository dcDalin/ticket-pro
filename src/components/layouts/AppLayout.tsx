import { ReactNode } from 'react';

import BottomNav from '@/components/navigation/BottomNav';
import TopNav from '@/components/navigation/TopNav';
import Seo from '@/components/Seo';

interface ILayoutProps {
  children: ReactNode;
  templateTitle: string;
  templateDescription: string;
  templateDate?: string;
}

export default function AppLayout({
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
      <main>
        <TopNav />
        <section>{children}</section>
        <BottomNav />
      </main>
    </div>
  );
}

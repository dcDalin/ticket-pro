import { ReactNode } from 'react';

import Container from '@/components/layouts/Container';
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
        <Container>{children}</Container>
        <BottomNav />
      </main>
    </div>
  );
}

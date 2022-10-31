import { ReactNode } from 'react';

interface IContainerProps {
  children: ReactNode;
}

export default function Container({ children }: IContainerProps) {
  return (
    <section className='container mx-auto flex flex-col space-y-4 px-2 py-4 md:space-y-8 md:px-0 md:py-8'>
      {children}
    </section>
  );
}

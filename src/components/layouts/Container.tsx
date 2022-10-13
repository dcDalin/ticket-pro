import { ReactNode } from 'react';

interface IContainerProps {
  children: ReactNode;
}

export default function Container({ children }: IContainerProps) {
  return (
    <section className='container mx-auto px-4 md:px-0'>{children}</section>
  );
}

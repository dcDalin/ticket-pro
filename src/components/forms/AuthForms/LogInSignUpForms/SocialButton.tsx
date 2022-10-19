import { ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '@/redux/store';

interface ISocialButtonProps {
  title: string;
  icon: ReactNode;
}

export default function SocialButton({ title, icon }: ISocialButtonProps) {
  const { isSignUpFormLoading, isLoginFormLoading } = useSelector(
    (state: RootState) => state.authForms
  );

  return (
    <button
      className={`btn btn-outline my-2 w-full gap-2 ${
        isSignUpFormLoading || isLoginFormLoading
          ? 'btn-disabled animate-pulse'
          : null
      }`}
    >
      {icon}
      {title}
    </button>
  );
}

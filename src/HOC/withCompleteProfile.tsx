import { useAuthenticationStatus } from '@nhost/nextjs';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { LOG_IN } from '@/constants/routes';

type withCompleteProfileFn = (Component: FC) => FC;

const withCompleteProfile: withCompleteProfileFn = (Component) => {
  const Authenticated: FC = (props): JSX.Element | null => {
    const { isLoading, isAuthenticated } = useAuthenticationStatus();

    const router = useRouter();

    if (isLoading) {
      return <h1>Loading...</h1>;
    }

    if (!isAuthenticated) {
      router.push(LOG_IN);
      return null;
    }

    return <Component {...props} />;
  };

  return Authenticated;
};

export default withCompleteProfile;

import { useAuthenticationStatus } from '@nhost/nextjs';
import { useRouter } from 'next/router';
import type { FC } from 'react';

import { HOME } from '@/constants/routes';

type withoutAuthenticationFn = (Component: FC) => FC;

const withoutAuthentication: withoutAuthenticationFn = (Component) => {
  const Authenticated: FC = (props): JSX.Element | null => {
    const { isLoading, isAuthenticated } = useAuthenticationStatus();

    const router = useRouter();

    if (isLoading) {
      return <h1>Without loading...</h1>;
    }

    if (isAuthenticated) {
      router.push(HOME);
      return null;
    }

    return !isAuthenticated ? <Component {...props} /> : null;
  };

  return Authenticated;
};

export default withoutAuthentication;

import { useAuthenticationStatus } from '@nhost/nextjs';
import { useRouter } from 'next/router';
import { FC } from 'react';

import useCheckUserProfileExists from '@/hooks/useCheckUserProfileExists';

import { COMPLETE_PROFILE, LOG_IN } from '@/constants/routes';

type withAuthenticationFn = (Component: FC) => FC;

const withAuthentication: withAuthenticationFn = (Component) => {
  const Authenticated: FC = (props): JSX.Element | null => {
    const { isLoading, isAuthenticated } = useAuthenticationStatus();
    const { data, loading } = useCheckUserProfileExists();

    const router = useRouter();

    if (isLoading || loading) {
      return <></>;
    }

    if (!isAuthenticated) {
      router.push(LOG_IN);
      return null;
    } else if (!data || !data.profile_by_pk) {
      router.push(COMPLETE_PROFILE);
      return null;
    }

    return <Component {...props} />;
  };

  return Authenticated;
};

export default withAuthentication;

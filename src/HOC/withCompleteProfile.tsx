import { useAuthenticationStatus } from '@nhost/nextjs';
import { useRouter } from 'next/router';
import { FC } from 'react';

import useCheckUserProfileExists from '@/hooks/useCheckUserProfileExists';
import useRedirectTo from '@/hooks/useRedirectTo';

import { LOG_IN } from '@/constants/routes';

type withCompleteProfileFn = (Component: FC) => FC;

const withCompleteProfile: withCompleteProfileFn = (Component) => {
  const Authenticated: FC = (props): JSX.Element | null => {
    const { isLoading, isAuthenticated } = useAuthenticationStatus();
    const { data, loading } = useCheckUserProfileExists();
    const redirectTo = useRedirectTo();
    const router = useRouter();

    if (isLoading || loading) {
      return <></>;
    }

    if (!isAuthenticated) {
      router.push(LOG_IN);
      return null;

      // check if username is already claimed
    } else if (data && data.profile_by_pk) {
      router.push(redirectTo);
      return null;
    }

    return <Component {...props} />;
  };

  return Authenticated;
};

export default withCompleteProfile;

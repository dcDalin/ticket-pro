import { useAuthenticationStatus } from '@nhost/nextjs';
import { useRouter } from 'next/router';
import { FC } from 'react';

import useCheckUserProfileExists from '@/hooks/useCheckUserProfileExists';

import { COMPLETE_PROFILE } from '@/constants/routes';

type withPageFn = (Component: FC) => FC;

const withPage: withPageFn = (Component) => {
  const Authenticated: FC = (props): JSX.Element | null => {
    const { isAuthenticated } = useAuthenticationStatus();
    const router = useRouter();

    const { data } = useCheckUserProfileExists();

    if (isAuthenticated) {
      if (data && data.profile_by_pk) {
        return <Component {...props} />;
      } else {
        router.push(COMPLETE_PROFILE);
        return null;
      }
    }

    return <Component {...props} />;
  };

  return Authenticated;
};

export default withPage;

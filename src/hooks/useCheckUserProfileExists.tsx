import { useQuery } from '@apollo/client';
import { useUserId } from '@nhost/nextjs';

import { CHECK_USER_PROFILE_EXISTS } from '@/graphql/queries';

export default function useCheckUserProfileExists() {
  const userId = useUserId();

  const { data, loading, error } = useQuery(CHECK_USER_PROFILE_EXISTS, {
    variables: { id: userId },
  });

  return { data, loading, error };
}

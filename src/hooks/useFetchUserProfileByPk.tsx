import { useQuery } from '@apollo/client';
import { useUserId } from '@nhost/nextjs';

import { FETCH_USER_PROFILE_BY_PK } from '@/graphql/queries';

export default function useFetchUserProfileByPk() {
  const userId = useUserId();

  const { data, loading, error } = useQuery(FETCH_USER_PROFILE_BY_PK, {
    variables: { id: userId },
  });

  return { data: data ? data.profile_by_pk : '', loading, error };
}

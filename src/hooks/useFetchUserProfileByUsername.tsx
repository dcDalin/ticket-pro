import { useQuery } from '@apollo/client';

import { FETCH_USER_PROFILE_BY_USER_NAME } from '@/graphql/queries';

export default function useFetchUserProfileByUsername(userName: string) {
  const { data, loading, error } = useQuery(FETCH_USER_PROFILE_BY_USER_NAME, {
    variables: { _eq: userName },
  });

  return { data, loading, error };
}

import { useQuery } from '@apollo/client';

import AppLayout from '@/components/layouts/AppLayout';

import { GET_TEST } from '@/graphql/queries';

export default function HomePage() {
  const { loading, data, error } = useQuery(GET_TEST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <AppLayout templateTitle='Home' templateDescription='Home page'>
      <h1>home page</h1>
      {JSON.stringify(data)}
    </AppLayout>
  );
}

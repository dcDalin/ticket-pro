import { gql, useQuery } from '@apollo/client';

import AppLayout from '@/components/layouts/AppLayout';

const GET_DATA = gql`
  query GetData {
    test {
      name
      id
      created_at
      updated_at
    }
  }
`;

export default function HomePage() {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <AppLayout templateTitle='Home' templateDescription='Home page'>
      <h1>home page</h1>
      {JSON.stringify(data)}
    </AppLayout>
  );
}

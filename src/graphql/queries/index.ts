import { gql } from '@apollo/client';

export const GET_TEST = gql`
  query GetTest {
    test {
      id
      name
      updated_at
      created_at
    }
  }
`;

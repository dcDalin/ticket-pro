import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://ticket-pro-local-dev.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
});

export default client;

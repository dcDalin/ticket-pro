import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const wsLink: any =
  typeof window !== 'undefined'
    ? new GraphQLWsLink(
        createClient({
          url: 'wss://ticket-pro-local-dev.hasura.app/v1/graphql',
          connectionParams: {
            authToken: '',
          },
        })
      )
    : null;

const httpLink = new HttpLink({
  uri: 'https://ticket-pro-local-dev.hasura.app/v1/graphql',
});

const splitLink =
  typeof window !== 'undefined' && wsLink != null
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          );
        },
        wsLink,
        httpLink
      )
    : httpLink;

const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;

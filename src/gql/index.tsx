import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { getRockets } from './queries';

export const apolloClient = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache(),
});

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getRockets } from './queries';

export const apolloClient = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache(),
});

class SpaceService {
  async getRockets(limit = 10) {
    const response = await apolloClient.query({
      query: getRockets,
      variables: { limit },
    });
    if (!response || !response.data) throw new Error('No Rocket Data!');
    return response.data;
  }
}
export default new SpaceService();

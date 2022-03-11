import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getRockets } from './queries';
import { useGetLaunchesQuery } from '../generated/graphql';

export const apolloClient = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache(),
});

class SpaceService {
  async getRockets() {
    const response = await useGetLaunchesQuery({
      query: getRockets,
    });
    if (!response || !response.data) throw new Error('No Rocket Data!');
    return response.data;
  }
}
export default new SpaceService();

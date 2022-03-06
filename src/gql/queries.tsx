import gql from 'graphql-tag';

export const getRockets = gql`
  query GetRockets($limit: Int!) {
    launchesPast(limit: $limit) {
      mission_name
      launch_site {
        site_name_long
      }
    }

    ships {
      image
    }
  }
`;

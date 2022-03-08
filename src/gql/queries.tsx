import gql from 'graphql-tag';

export const getRockets = gql`
  query GetLaunches {
    launches {
      rocket {
        rocket_type
        rocket_name
      }
    }
  }
`;

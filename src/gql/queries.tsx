import gql from 'graphql-tag';

export const getRockets = gql`
  query GetLaunches {
    launches {
      rocket {
        rocket_type
        rocket_name
        rocket {
          success_rate_pct
        }
      }
    }
    launchesPast(order: "descending") {
      rocket {
        second_stage {
          payloads {
            payload_mass_kg
          }
        }
      }
      launch_success
      launch_date_local
      launch_year
    }
  }
`;

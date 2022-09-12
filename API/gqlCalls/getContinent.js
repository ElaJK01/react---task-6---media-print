import { gql } from "@apollo/client";

const CONTINENT_QUERY = gql`
  query Continent($code: ID!) {
    continent(code: $code) {
      code
      name
      countries {
        code
        name
      }
    }
  }
`;
export default CONTINENT_QUERY;

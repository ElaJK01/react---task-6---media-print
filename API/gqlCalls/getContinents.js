import { gql } from "@apollo/client";

const CONTINENTS_QUERY = gql`
  {
    continents {
      name
      code
      countries {
        name
        code
      }
    }
  }
`;
export default CONTINENTS_QUERY;

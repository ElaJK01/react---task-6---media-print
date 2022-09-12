import { gql } from "@apollo/client";

const LANGUAGES_QUERY = gql`
  {
    languages {
      name
      code
      native
    }
  }
`;
export default LANGUAGES_QUERY;

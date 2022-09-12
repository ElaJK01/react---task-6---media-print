import { gql } from "@apollo/client";

const COUNTRIES_QUERY = gql`
  {
    countries {
      name
      code
      capital
      currency
      languages {
        name
        code
      }
      emoji
      emojiU
      states {
        name
        code
      }
    }
  }
`;
export default COUNTRIES_QUERY;

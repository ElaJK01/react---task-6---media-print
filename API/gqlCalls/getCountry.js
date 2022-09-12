import { gql } from "@apollo/client";

const COUNTRY_QUERY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      code
      name
      capital
      native
      currency
      languages {
        code
        name
      }
      emoji
      emojiU
      states {
        name
        country {
          name
        }
      }
      phone
      continent {
        name
        code
      }
    }
  }
`;
export default COUNTRY_QUERY;

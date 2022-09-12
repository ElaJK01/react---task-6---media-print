import { gql } from "@apollo/client";

const GET_LANG_INFO = gql`
  query Language($code: ID!) {
    language(code: $code) {
      code
      name
      native
    }
  }
`;

export default GET_LANG_INFO;

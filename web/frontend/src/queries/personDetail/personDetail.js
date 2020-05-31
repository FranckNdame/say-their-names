import gql from "graphql-tag";

const PERSON_DETAIL_QUERY = gql`
  query People($id: ID!) {
    person(id: $id) {
      id
      name
      image {
        url
      }
      date_of_death
    }
  }
`;

export default PERSON_DETAIL_QUERY;
